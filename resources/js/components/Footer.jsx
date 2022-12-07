import React from 'react';

const Footer = () => {
    return (
        <div className="footer-section section">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-sm-5 mobile-center">
						<span className="copyright-text">All right resarved by <a href="https://www.linkedin.com/in/zubaer-rahman/"> Md. Zubaer Rahman </a></span>
					</div> 
					<div className="col-md-4 col-sm-2 text-center">
						<a href="index.html" className="footer-logo"><img src="assets/images/logo.png" alt="logo" /></a>
					</div> 
					<div className="col-md-4 col-sm-5 text-right mobile-center">
						<ul className="footer-links">
							<li><a href="#">Licence</a></li>
							<li><a href="#">Policy</a></li>
							<li><a href="#">Discussion</a></li>
						</ul>
					</div> 
				</div> 
			</div> 
		</div>
    );
};

export default Footer;