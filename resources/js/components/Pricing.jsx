import React from 'react';

const Pricing = () => {
    return (
        <div className="pricing-section section white-bg" id="pricing">
			<div className="container">
				<div className="section-head">
					<div className="row text-center">
						<div className="col-md-12">
							<h3>Pricing<span>.</span></h3>
							<p className="lead">You got options to buy this books.</p>
						</div> 
					</div> 
				</div> 
				<div className="row text-center tab-fix">
					<div className="col-md-4">
						<div className="single-pricing animate" data-left="-50" data-delay=".2">
							<h4><sup>$</sup>6<small>.99</small></h4>
							<h5><i className="icofont icofont-ebook"></i> e-Book</h5>
							<a href="#" className="button sm">Get it now</a>
							<i className="icon-left icofont icofont-ebook"></i>
							<i className="icon-right icofont icofont-ebook"></i>
						</div>
					</div>
					<div className="col-md-4">
						<div className="single-pricing featured-price animate" data-bottom="-50" data-delay=".2">
							<h4><sup>$</sup>12<small>.99</small></h4>
							<h5><i className="icofont icofont-file-pdf"></i> PDF</h5>
							<a href="#" className="button sm alt">Get it now</a>
							<i className="icon-left icofont icofont-file-pdf"></i>
							<i className="icon-right icofont icofont-file-pdf"></i>
							<span className="sell-badge">Best Seller</span>
						</div>
					</div>
					<div className="col-md-4">
						<div className="single-pricing animate" data-right="-50" data-delay=".2">
							<h4><sup>$</sup>19<small>.99</small></h4>
							<h5><i className="icofont icofont-read-book"></i> Printed</h5>
							<a href="#" className="button sm">Get it now</a>
							<i className="icon-left icofont icofont-read-book"></i>
							<i className="icon-right icofont icofont-read-book"></i>
						</div>
					</div> 
				</div> 
			</div> 
		</div>
    );
};

export default Pricing;