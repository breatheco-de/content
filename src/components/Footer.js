import React, { Component } from "react";

class Footer extends Component {
	render() {
		return (
			<div>
				<footer className="footer gradientFooter">
					<div className="container pt-5 pb-4">
						<div className="row">
							<div className="col-12 text-center"><a className="text-secondary" href="mailto:info@breatheco.de">Contact Us</a></div>
						</div>
						<div className="row text-center">
							<div className="col-12">
								© {new Date().getFullYear()}, Built By
								{` `}
								<a href="https://www.breatheco.de">BreatheCode</a>
								{` `}
								in collaboration with
								{` `}
								<a href="https://4geeksacademy.com/">4Geeks Academy</a>

							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
export default Footer 