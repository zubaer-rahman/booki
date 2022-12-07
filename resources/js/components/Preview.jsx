import React from 'react';

const Preview = () => {
    return (
		<div className="preview-section section white-bg" id="preview">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="preview-video animate" data-right="-100" data-duration="1">
                        <img src="assets/images/preview.jpg" alt="" />
                        <a href="https://www.youtube.com/watch?v=kuceVNBTJio" data-effect="mfp-3d-unfold" className="play-button embaded-popup">
                            <span className="pb-border-1">
                                <span className="pb-border-2">
                                    <i className="icofont icofont-ui-play"></i>
                                </span>
                            </span>
                        </a> 
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="preview-texts">
                        <h3>Discoverd <span>Topics.</span></h3>
                        <p className="lead">Take a look at topics are discovered in this book</p>
                        <p>Gain is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances.</p>
                        <ul className="topic-list">
                            <li><i className="icofont icofont-check"></i> Design principles</li>
                            <li><i className="icofont icofont-check"></i> Typography</li>
                            <li><i className="icofont icofont-check"></i> Visual hierarchy</li>
                            <li><i className="icofont icofont-check"></i> Color theory</li>
                            <li><i className="icofont icofont-check"></i> White space</li>
                            <li><i className="icofont icofont-check"></i> UI design</li>
                            <li><i className="icofont icofont-check"></i> Image selection</li>
                            <li><i className="icofont icofont-check"></i> UX design</li>
                            <li><i className="icofont icofont-check"></i> Responsive Design</li>
                            <li><i className="icofont icofont-check"></i> Real life projects</li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div> 
    </div> 
    );
};

export default Preview;