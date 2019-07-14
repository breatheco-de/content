import React from "react";
import Popver from "react-popover";
import PropTypes from "prop-types";


class Popover extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }
  toggle(toState = null) {
    this.setState({ isOpen: toState === null ? !this.state.isOpen : toState });
  }
  render() {
    return (

            <Popver
                isOpen={this.state.isOpen}
                preferPlace="below"
                // className="ml-4"
                body={
                this.props.body ? this.props.body : <div>Please specify a body</div>
                }
            >
                <div
                className="m-0 p-0 d-inline"

                onMouseOver={() => this.toggle(true)}
                onMouseOut={() => this.toggle(false)}
                >
                {this.props.children}
                </div>
            </Popver>

    );
  }
}

Popover.propTypes = {
  body: PropTypes.node,
  children: PropTypes.node
};
Popover.defaultProps = {
  body: null
};
export default Popover;