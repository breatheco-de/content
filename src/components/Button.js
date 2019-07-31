import React from "react";
import PropTypes from "prop-types";

export default class Button extends React.Component {
	render() {
		return (
			<a rel="noopener" className={this.props.classNameButton} href={this.props.href}>
				{this.props.buttonText}
				<br />
				<small>{this.props.smallText}</small>
			</a>
		);
	}
}

Button.propTypes = {
	classNameButton: PropTypes.string,
	buttonText: PropTypes.string,
	smallText: PropTypes.string,
	href: PropTypes.string
};