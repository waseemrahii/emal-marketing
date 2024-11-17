import React from "react";
import "./ContactDetail.css";
import { FaCommentAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactDetail = () => {
  return (
    <section className="contact-promo ptb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column align-items-center h-100">
              <FaCommentAlt className="fs-3 mb-3 text-black" />
              <div className="contact-promo-info mb-4">
                <h5>Chat with us</h5>
                <p>
                  We've got live Social Experts waiting to help you{" "}
                  <strong>monday to friday</strong> from{" "}
                  <strong>9am to 5pm EST.</strong>
                </p>
              </div>
              <Link
                to={"mailto:hellothemetags@gmail.com"}
                className="btn  mt-auto soc bg-[#009fc1] "
              >
                Chat with us
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex align-items-center flex-column h-100">
              <FaEnvelope className="fs-3 mb-3 text-black" />
              <div className="contact-promo-info mb-4">
                <h5>Email Us</h5>
                <p>
                  Simply drop us an email at{" "}
                  <strong>abccddf2020@gmail.com</strong> and you'll receive
                  a reply within 24 hours
                </p>
              </div>
              <Link
                to={"mailto:hellothemetags@gmail.com"}
                className="btn  mt-auto soc"
              >
                Email Us
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div className="contact-us-promo p-5 bg-white rounded-custom custom-shadow text-center d-flex flex-column align-items-center h-100">
              <FaPhone className="fs-3 mb-3 text-black" />
              <div className="contact-promo-info mb-4">
                <h5>Give us a call</h5>
                <p>
                  Give us a ring. Our Experts are standing by{" "}
                  <strong>monday to friday</strong> from{" "}
                  <strong>9am to 5pm EST.</strong>
                </p>
              </div>
              <Link
                to={"tel:00-966-231-432"}
                className="btn btn-link mt-auto soc"
              >
                +92-966-231-4329
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetail;
