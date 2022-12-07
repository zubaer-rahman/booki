import React from 'react';

const Feature = () => {
    return (
		<div className="features-section section alt-bg">
        <div className="container">
            <div className="section-head">
                <div className="row text-center">
                    <div className="col-md-12">
                        <h3>Why this <span>Book?</span></h3>
                        <p className="lead">Let’s take a look why you should buy this book.</p>
                    </div> 
                </div> 
            </div> 
            <div className="row text-center">
                <div className="col-md-3 col-sm-6">
                    <div className="single-features animate" data-left="-30" data-delay="0">
                        <i className="icofont icofont-man-in-glasses"></i>
                        <h6>Exprienced author</h6>
                        <p>Your brain is not in your control? then go see a neurologist.</p>
                    </div>
                </div> 
                <div className="col-md-3 col-sm-6">
                    <div className="single-features animate" data-left="-30" data-delay=".3">
                        <i className="icofont icofont-certificate-alt-1"></i>
                        <h6>Best Seller</h6>
                        <p>Facing problem with your teeths, see a dental specilist.</p>
                    </div>
                </div> 
                <div className="col-md-3 col-sm-6">
                    <div className="single-features animate" data-left="-30" data-delay=".6">
                        <i className="icofont icofont-instrument"></i>
                        <h6>Reallife project</h6>
                        <p>Need to test your blood or something else? we are here.</p>
                    </div>
                </div> 
                <div className="col-md-3 col-sm-6">
                    <div className="single-features animate" data-left="-50" data-delay=".9">
                        <i className="icofont icofont-money-bag"></i>
                        <h6>money back</h6>
                        <p>We are here to help with your any kind of body parts disablity.</p>
                    </div>
                </div> 
            </div> 
        </div> 
    </div> 
    );
};

export default Feature;