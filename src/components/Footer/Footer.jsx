import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-top ptb-120  snipcss-B7PwR">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-md-8 col-lg-4 mb-md-4 mb-lg-0">
                        <div className="footer-single-col">
                            <div className="footer-single-col mb-4">
                                <img src="bulk email service-12.png" alt="Newsletter" style={{width:"50px", borderRadius:"10px",marginBottom:"1.3rem"}}/>
                                <p>Our latest news, articles, and resources, we will send to your inbox weekly.</p>
                                <form className="newsletter-form position-relative d-block d-lg-flex d-md-flex">
                                    <input type="text" placeholder="Enter your email" name="email" required="required" autoComplete="off" className="input-newsletter form-control me-2" />
                                    <input type="submit" value="Subscribe" data-wait="Please wait..." className="btn red-color mt-3 mt-lg-0 mt-md-0" />
                                </form>
                                <div className="ratting-wrap mt-4">
                                    <h6 className="mb-0">10/10 Overall rating</h6>
                                    <ul className="review-rate mb-0 mt-2 list-unstyled list-inline">
                                        <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-7 mt-4 mt-md-0 mt-lg-0">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                                <div className="footer-single-col">
                                    <h3 style={{color:"white !important"}}>Primary Pages</h3>
                                    <ul className="list-unstyled footer-nav-list mb-lg-0">
                                        <li><a href="/" className="text-decoration-none router-link-active">Home</a></li>
                                        <li><a href="/about-us" className="text-decoration-none">About Us</a></li>
                                        <li><a href="/services" className="text-decoration-none">Services</a></li>
                                        <li><a href="/career" className="text-decoration-none">Career</a></li>
                                        <li><a href="/integrations" className="text-decoration-none">Integrations</a></li>
                                        <li><a href="/integration-single" className="text-decoration-none">Integration Single</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                                <div className="footer-single-col">
                                    <h3>Pages</h3>
                                    <ul className="list-unstyled footer-nav-list mb-lg-0">
                                        <li><a href="/pricing" className="text-decoration-none">Pricing</a></li>
                                        <li><a href="/news" className="text-decoration-none">News</a></li>
                                        <li><a href="/news-details" className="text-decoration-none">News Details</a></li>
                                        <li><a href="/contact" className="text-decoration-none">Contact</a></li>
                                        <li><a href="/career-single" className="text-decoration-none">Career Single</a></li>
                                        <li><a href="/service-single" className="text-decoration-none">Services Single</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 mt-4 mt-md-0 mt-lg-0">
                                <div className="footer-single-col">
                                    <h3>Template</h3>
                                    <ul className="list-unstyled footer-nav-list mb-lg-0">
                                        <li><a href="/contact" className="text-decoration-none">Contact</a></li>
                                        <li><a href="/support" className="text-decoration-none">Support</a></li>
                                        <li><a href="/help-single" className="text-decoration-none">Support Single</a></li>
                                        <li><a href="/about-us" className="text-decoration-none">Our Team</a></li>
                                        <li><a href="/login" className="text-decoration-none">User Login</a></li>
                                        <li><a href="/career-single" className="text-decoration-none">Career Single</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
