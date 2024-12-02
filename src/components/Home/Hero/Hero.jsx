import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Using React icons
import './Hero.css'; // Importing CSS file for styling
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="Default_marketing-default-hero__Ew4q_ snipcss-BM3IN" style={{ backgroundColor: 'var(--marketing-mint-green-300, #d7fec8)' }}>
      <div className="dist_marketing-container__H_Hue">
        <div className="Default_marketing-default-hero__inner__fqA9B">
          <div className="Default_marketing-default-hero__content__4Xu0A">
            <div className="Default_marketing-default-hero__document__zulIy">
              <h1 className="marketing-heading-3 dist_brevo-heading__utk3d">
                Grow with our Email Marketing Platform 
              </h1>
              <p className="marketing-typo_text-inter-3-regular Default_marketing-default-hero__text__n2eF4">
                 Leverage a user-friendly email marketing service to drive revenue growth. Backed by 24/7 support
              </p>
            </div>
            <div className="Default_marketing-default-hero__cta__zb9by">
             <Link to={'/pricing'} >
              <button
                type="button"
                data-testid="marketing-btn"
                className="marketing-typo_text-inter-5-medium dist_marketing-btn__T7nAD dist_marketing-btn--lg__09PM4 dist_marketing-btn-light__QOvFK dist_marketing-btn-light--mint-green__EUo3x"
                aria-disabled="false"
              >
                <span className="">Sign up free</span>
                <FaArrowRight className="ml-2" /> {/* React icon added */}
              </button>
              </Link>

            </div>
          </div>
          <div className="Default_marketing-default-hero__media__z3g1Z">
            <img
              alt="Hero Image"
              aria-label="Hero Image"
              decoding="async"
              fetchpriority="high"
              height="400"
              loading="eager"
              src="https://www.spcdn.org/images/email/email-en/email-hero-img-en.png"
              width="800"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
