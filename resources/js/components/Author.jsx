import React from 'react';

const Author = () => {
    return (
		<div className="author-section section white-bg" id="author">
        <div className="container">
            <div className="row">
                <div className="col-md-6 pull-right tab-center">
                    <div className="author-texts">
                        <h4>Brittany <span>Garrett</span></h4>
                        <span className="author-profession">Web Designer / Blogger / Teacher</span>
                        <ul className="social-icons">
                            <li><a href=""><i className="icofont icofont-social-facebook"></i></a></li>
                            <li><a href=""><i className="icofont icofont-social-twitter"></i></a></li>
                            <li><a href=""><i className="icofont icofont-social-instagram"></i></a></li>
                            <li><a href=""><i className="icofont icofont-social-youtube"></i></a></li>
                        </ul>
                        <div className="author-quote">
                            <blockquote>You don't want to become guilty of plagiarism by letting someone else's words get inadvertently mixed in with your own. If you do feel the need to paste in a block of research while you're writing, be sure to highlight the copied text in a different color so you can go back and remove or rewrite it entirely later.</blockquote>
                            <img src="images/sign.png" alt="sign" />
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="author-image tab-fix animate" data-left="-100">
                        <img src="images/author.png" alt="author" />
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div> 
        </div> 
    </div> 
    );
};

export default Author;