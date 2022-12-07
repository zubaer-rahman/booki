import React from 'react';

const Testimonial = () => {
    return ( 
		<div className="testimonials-section section alt-bg" id="reviews">
        <div className="container">
            <div className="section-head">
                <div className="row text-center">
                    <div className="col-md-12">
                        <h3>Customer <span>Words.</span></h3>
                        <p className="lead">Peoples are taking about this book take a look.</p>
                    </div> 
                </div> 
            </div> 
            <div className="row testimonials-list masonry-layout tab-fix">
                <div className="col-md-6 testimonial-item masonry-item">
                    <div className="video-testimonial">
                        <img src="assets/images/testimonials/1.jpg" alt="testimonials" />
                        <div className="overlay">
                            <div className="client-info">
                                <a href="https://www.youtube.com/watch?v=kuceVNBTJio" data-effect="mfp-3d-unfold" className="play-button embaded-popup">
                                    <span className="pb-border-1">
                                        <span className="pb-border-2">
                                            <i className="icofont icofont-ui-play"></i>
                                        </span>
                                    </span>
                                </a> 
                                <div className="client-bio">
                                    <h6>Elizabeth Douglas</h6>
                                    <ul>
                                        <li><i className="icofont icofont-star"></i></li>
                                        <li><i className="icofont icofont-star"></i></li>
                                        <li><i className="icofont icofont-star"></i></li>
                                        <li><i className="icofont icofont-star"></i></li>
                                        <li><i className="icofont icofont-star"></i></li>
                                    </ul>
                                </div>
                            </div>  
                        </div> 
                    </div> 
                </div> 
                <div className="col-md-6 testimonial-item masonry-item">
                    <div className="single-testimonial">
                        <blockquote>Web design dummis is a great book to read for new web designers. Everything is writen in easy and understand able language with great real life project examples.</blockquote>
                        <div className="client-info">
                            <div className="client-bio">
                                <h6>Stephen Mendez</h6>
                                <ul>
                                    <li><i className="icofont icofont-star"></i></li>
                                    <li><i className="icofont icofont-star"></i></li>
                                    <li><i className="icofont icofont-star"></i></li>
                                    <li><i className="icofont icofont-star"></i></li>
                                    <li><i className="icofont icofont-star"></i></li>
                                </ul>
                            </div>
                        </div> 
                    </div> 
                </div> 
                <div className="col-md-6 testimonial-item masonry-item">
                    <div className="single-testimonial">
                        <blockquote>What a awesome book. I have never read a nice and easy to understand book ever. I can say that the author put lot of hard work in it. The way he introduce design in this book in one word to say is “Awesome”.</blockquote>
                        <div className="client-info">
                            <div className="client-bio">
                                <h6>Alexander Kennedy</h6>
                                <ul>
                                    <li><i className="icofont icofont-star"></i></li>
                                    <li><i className="icofont icofont-star"></i></li>
                                    <li><i className="icofont icofont-star"></i></li>
                                    <li><i className="icofont icofont-star"></i></li>
                                    <li><i className="icofont icofont-star"></i></li>
                                </ul>
                            </div>
                        </div> 
                    </div> 
                </div> 
                <div className="col-md-6 testimonial-item masonry-item">
                    <div className="single-testimonial">
                        <blockquote>I have never read a nice and easy to understand book ever. I can say that the author put lot of hard work in it. The way he introduce design in this book.</blockquote>
                        <div className="client-info">
                            <div className="client-bio">
                                <h6>Christine Murray</h6>
                                <ul>
                                    <li><i className="icofont icofont-star"></i></li>
                                    <li><i className="icofont icofont-star"></i></li>
                                    <li><i className="icofont icofont-star"></i></li>
                                    <li><i className="icofont icofont-star"></i></li>
                                    <li><i className="icofont icofont-star"></i></li>
                                </ul>
                            </div>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </div> 
)};

export default Testimonial;