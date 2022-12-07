import React from 'react';

const TopBar = () => {
    return (
		<div id="navigation" className="top-bar">
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#site-collapse-nav" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand hidden-md hidden-lg nav-item" href="#header"><img src="assets/images/logo.png" alt="logo" /></a>
                </div>

                <div className="collapse navbar-collapse" id="site-collapse-nav">
                    <ul className="nav navbar-nav">
                        <li><a className="nav-item" href="#header"><i className="icofont icofont-bubble-up"></i> top</a></li>
                        <li><a className="nav-item" href="#preview">inside preview</a></li>
                        <li><a className="nav-item" href="#author">About author</a></li>
                        <li><a className="nav-item" href="#reviews">reviews</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a className="line-button nav-item" href="#pricing">buy for $19.99</a></li>
                    </ul>
                 </div>  
            </div>  
        </nav>
    </div>   
    );
};

export default TopBar;