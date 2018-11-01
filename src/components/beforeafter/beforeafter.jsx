import React from 'react';
import PropTypes from 'prop-types';
import { ResizeSensor } from 'css-element-queries';

const propTypes = {
  before: PropTypes.string.isRequired,
  after: PropTypes.string.isRequired,
  sliderLineWidth: PropTypes.number,
  handleSize: PropTypes.number,
  hover: PropTypes.bool,
  skeleton: PropTypes.element,
  autoReloadSpan: PropTypes.number,
  autoReloadLimit: PropTypes.number,
  width: PropTypes.string,
  sliderPositionPercentage: PropTypes.number,
  onSliderPositionChange: PropTypes.func
};

const defaultProps = {
  sliderLineWidth: 2,
  handleSize: 40,
  hover: true,
  skeleton: null,
  width: '100%',
  autoReloadSpan: null,
  autoReloadLimit: 10,
  sliderPositionPercentage: 0.5,
};

export class BeforeAfter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderPositionPercentage: this.props.sliderPositionPercentage, // 0 to 1
      imageWidth: 0,
      isImgFullyLoaded: false,
    };

    this.containerRef = React.createRef();
    this.underImageRef = React.createRef();
    this.overImageRef = React.createRef();

    this.isLoadingRightImg = true;
    this.isLoadingLeftImg = true;

    this.autoReloadTasks = [];

    this.retryCount = 0;
  }

  componentDidMount = () => {
    const containerElement = this.containerRef.current;

    // Re-set images size when container size is changed
    new ResizeSensor(containerElement, () => {
      this.setImagesSize();
    });

    // for mobile
    containerElement.addEventListener('touchstart', this.startSliding);
    window.addEventListener('touchend', this.finishSliding);

    // for desktop
    if (this.props.hover) {
      containerElement.addEventListener('mouseenter', this.startSliding);
      containerElement.addEventListener('mouseleave', this.finishSliding);
    } else {
      containerElement.addEventListener('mousedown', this.startSliding);
      window.addEventListener('mouseup', this.finishSliding);
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    // do initial setup if loading images and DOM constructing are fully done
    if (
      prevState.isImgFullyLoaded === false &&
      this.state.isImgFullyLoaded === true
    ) {
      this.setImagesSize();
    }

    // show skeleton again if given images are changed
    if (
      this.props.before !== prevProps.before ||
      this.props.after !== prevProps.after
    ) {
      this.underImageRef.current.src = null;
      this.overImageRef.current.src = null;

      this.isLoadingRightImg = true;
      this.isLoadingLeftImg = true;
      this.setState({
        isImgFullyLoaded: false,
      });

      this.underImageRef.current.src = this.props.after;
      this.overImageRef.current.src = this.props.before;
    }
  };

  componentWillUnmount = () => {
    this.finishSliding();
    window.removeEventListener('mouseup', this.finishSliding);
    window.removeEventListener('touchend', this.finishSliding);
    this.autoReloadTasks.forEach(task => clearTimeout(task));
  };

  setImagesSize = () => {
    // Image size set as follows.
    //
    // 1. set under image size like so:
    //     width  = 100% of container width
    //     height = auto
    //
    // 2. set over imaze size like so:
    //     width  = 100% of container width
    //     height = under image's height
    //              (protrudes is hidden by css 'object-fit: hidden')
    this.setState({
      imageWidth: this.underImageRef.current.getBoundingClientRect().width,
    });
  };

  startSliding = e => {
    // Prevent default behavior other than mobile scrolling
    if (!('touches' in e)) {
      e.preventDefault();
    }

    // Slide the image even if you just click or tap (not drag)
    this.handleSliding(e);

    window.addEventListener('mousemove', this.handleSliding);
    window.addEventListener('touchmove', this.handleSliding);
  };

  finishSliding = () => {
    window.removeEventListener('mousemove', this.handleSliding);
    window.removeEventListener('touchmove', this.handleSliding);
  };

  handleSliding = event => {
    const e = event || window.event;

    // Calc Cursor Position from the left edge of the viewport
    const cursorXfromViewport = e.touches ? e.touches[0].pageX : e.pageX;

    // Calc Cursor Position from the left edge of the window (consider any page scrolling)
    const cursorXfromWindow = cursorXfromViewport - window.pageXOffset;

    // Calc Cursor Position from the left edge of the image
    const imagePosition = this.underImageRef.current.getBoundingClientRect();
    let pos = cursorXfromWindow - imagePosition.left;

    // Set minimum and maximum values ​​to prevent the slider from overflowing
    const minPos = 0 + this.props.sliderLineWidth / 2;
    const maxPos = this.state.imageWidth - this.props.sliderLineWidth / 2;

    if (pos < minPos) pos = minPos;
    if (pos > maxPos) pos = maxPos;

    this.setState({
      sliderPositionPercentage: pos / this.state.imageWidth,
    });
    // If there's a callback function, invoke it everytime the slider changes
    if(this.props.onSliderPositionChange){
      this.props.onSliderPositionChange(pos / this.state.imageWidth)
    }
  };

  onRightImageLoaded = () => {
    this.isLoadingRightImg = false;

    if (!this.isLoadingRightImg && !this.isLoadingLeftImg) {
      this.setState({ isImgFullyLoaded: true });
    }
  };

  onLeftImageLoaded = () => {
    this.isLoadingLeftImg = false;
    if (!this.isLoadingRightImg && !this.isLoadingLeftImg) {
      this.setState({ isImgFullyLoaded: true });
    }
  };

  onError = (ref, src) => {
    const { autoReloadSpan, autoReloadLimit } = this.props;

    if (!autoReloadSpan) return;
    if (this.retryCount >= autoReloadLimit) return;

    const taskId = setTimeout(() => {
      ref.current.src = null;
      ref.current.src = src;
    }, autoReloadSpan);
    this.autoReloadTasks.push(taskId);

    this.retryCount += 1;
  };

  render = () => {
    const styles = {
      container: {
        boxSizing: 'border-box',
        position: 'relative',
        margin: 'auto',
        width: this.props.width,
        overflow: 'hidden',
      },
      underImage: {
        display: 'block',
        height: 'auto', // Respect the aspect ratio
        width: '100%',
      },
      overImage: {
        clip: `rect(auto, ${this.state.imageWidth *
          this.state.sliderPositionPercentage}px, auto, auto)`,
        display: 'block',
        height: '100%', // fit to the height of under image
        objectFit: 'cover', // protrudes is hidden
        position: 'absolute',
        top: 0,
        width: '100%',
      },
      slider: {
        alignItems: 'center',
        cursor: !this.props.hover && 'ew-resize',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center',
        left:
          this.state.imageWidth * this.state.sliderPositionPercentage -
          this.props.handleSize / 2 +
          'px',
        position: 'absolute',
        top: 0,
        width: `${this.props.handleSize}px`,
      },
      line: {
        background: 'white',
        boxShadow:
          '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
        flex: '0 1 auto',
        height: '100%',
        width: `${this.props.sliderLineWidth}px`,
      },
      handle: {
        alignItems: 'center',
        border: `${this.props.sliderLineWidth}px solid white`,
        borderRadius: '100%',
        boxShadow:
          '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
        boxSizing: 'border-box',
        display: 'flex',
        flex: '1 0 auto',
        height: `${this.props.handleSize}px`,
        justifyContent: 'center',
        width: `${this.props.handleSize}px`,
      },
      leftArrow: {
        border: `inset ${this.props.handleSize * 0.15}px rgba(0,0,0,0)`,
        borderRight: `${this.props.handleSize * 0.15}px solid white`,
        height: '0px',
        marginLeft: `-${this.props.handleSize * 0.25}px`, // for IE11
        marginRight: `${this.props.handleSize * 0.25}px`,
        width: '0px',
      },
      rightArrow: {
        border: `inset ${this.props.handleSize * 0.15}px rgba(0,0,0,0)`,
        borderLeft: `${this.props.handleSize * 0.15}px solid white`,
        height: '0px',
        marginRight: `-${this.props.handleSize * 0.25}px`, // for IE11
        width: '0px',
      },
    };

    return (
      <React.Fragment>
        {this.props.skeleton &&
          !this.state.isImgFullyLoaded && (
            <div style={{ ...styles.container }}>{this.props.skeleton}</div>
          )}

        <div
          style={{
            ...styles.container,
            display: this.state.isImgFullyLoaded ? 'block' : 'none',
          }}
          ref={this.containerRef}
          dataenzyme="container"
        >
          <img
            onLoad={this.onLeftImageLoaded}
            onError={() =>
              this.onError(this.underImageRef, this.props.after)
            }
            alt="left"
            className="img-comp-under"
            ref={this.underImageRef}
            src={this.props.after}
            style={styles.underImage}
          />
          <img
            onLoad={this.onRightImageLoaded}
            onError={() =>
              this.onError(this.overImageRef, this.props.before)
            }
            alt="right"
            className="img-comp-over"
            ref={this.overImageRef}
            src={this.props.before}
            style={styles.overImage}
          />
          <div className="img-comp-slider" style={styles.slider}>
            <div style={styles.line} />
            <div style={styles.handle}>
              <div style={styles.leftArrow} />
              <div style={styles.rightArrow} />
            </div>
            <div style={styles.line} />
          </div>
        </div>
      </React.Fragment>
    );
  };
}

BeforeAfter.propTypes = propTypes;
BeforeAfter.defaultProps = defaultProps;