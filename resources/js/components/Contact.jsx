import React from 'react';

const Contact = () => {
    return (
        <div className="contact-section section alt-bg">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="contact-form-side">
							<h3>Get in <span>touch</span></h3>
							<p className="lead">Wann to have a chat the book author</p>
							<form className="contact-form" id="contact">
								<div className="row">
									<div className="col-md-12">
										 
										<h6 className="error">
											<span className="colored-text icon_error-circle_alt"></span> 
											E-mail must be valid and message must be longer than 1 character. 
										</h6>	
									</div>
								</div> 
								<div className="row">
									<div className="col-sm-6">
										<div className="input-box">
											<input id="cf-name" type="text" name="cf-name" placeholder="Name" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="input-box">
											<input id="cf-email" type="text" name="cf-email" placeholder="Email" />
										</div>
									</div>
								</div> 
								<div className="row">
									<div className="col-sm-12">
										<div className="input-box">
											<input id="cf-subject" type="text" name="cf-subject" placeholder="Subject" />
										</div>
									</div>
								</div> 
								<div className="row">
									<div className="col-sm-12">
										<div className="input-box">
											<textarea id="cf-message" name="cf-message" placeholder="Message"></textarea>
										</div>
									</div>
								</div> 
								<div className="row">
									<div className="col-md-12">
										 
										<h6 className="success">
											<span className="olored-text icon_check"></span> 
											Your message has been sent successfully. 
										</h6>
									</div>
								</div> 
								<div className="row">
									<div className="col-sm-12">
										<div className="input-box">
											<input className="button sm" id="cf-submit" name="submit" type="submit" value="Send Message" />
										</div>
									</div>
								</div> 
							</form> 
						</div> 
					</div>  
					<div className="col-md-6">
						<div className="contact-info-side">
							<div id="map" className="google-map"></div>
							<div className="contact-info">
								<h6>Contact us</h6>
								<p>3401 Nicholasville Road Lexington, KY 40503 <br />(913) 234-9800, (859) 971-5400</p>
							</div>
						</div>
					</div> 
				</div> 
			</div> 
		</div>
    );
};

export default Contact;