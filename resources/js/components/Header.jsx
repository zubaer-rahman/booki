import React from 'react';

const Header = () => {
    return (
		<div className="header-section section" id="header">
        <div className="container">
            <div className="row tab-center mobile-center">
                <div className="col-md-6">
                    <div className="header-texts">
                        <h1>Best <span>book</span></h1>
                        <h2>to learn design</h2>
                        <h5>A BOOK BY ILIASH HOSAIN</h5>
                        <a href="#pricing" className="button nav-item">buy for $19.99</a>
                        <span className="header-note">
                            <i className="icofont icofont-check"></i>Aviable in PDF, kindle, iBookstore
                        </span>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="header-mockup">
                        <img id="mockupimage" className="animate" src="assets/images/mockup.png" alt="mockup" data-right="-100"/>
                    </div>
                </div>
            </div>
        </div>
    </div>     
    );
};

export default Header;