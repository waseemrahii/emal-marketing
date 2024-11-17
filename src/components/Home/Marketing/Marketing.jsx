import React from 'react';
import './Marketing.css';

const Marketing = () => {
  return (
    <div className="container pt-7 mt-10">
      <section
        className="flex flex-col md:flex-row dist_marketing-container__H_Hue dist_paddingTop__tfW4m dist_paddingBtm__WQaL9 dist_marketing-media__VBwmP dist_marketing-media--right__pZAT1 container"
        aria-labelledby="advanced-segmentation-for-best-results"
        role="region"
        tabIndex="0"
      >
        <section className="dist_marketing-media__body__KhiUY">
          <h3 className="marketing-heading-5 dist_brevo-heading__utk3d" id="advanced-segmentation-for-best-results">
            Advanced segmentation for best results
          </h3>
          <span className="marketing-typo_text-inter-3-regular">
            Increase your email opens and clicks with our powerful segmentation engine. Brevo makes it easy to send
            targeted messages to different segments of your email marketing list.
          </span>
          <ul className="dist_marketing-media__list__UfSQe">
            <li className="marketing-typo_text-inter-3-regular">
              Create different recipient groups by using filters and attributes
            </li>
            <li className="marketing-typo_text-inter-3-regular">
              Segment according to demographics or purchase history
            </li>
            <li className="marketing-typo_text-inter-3-regular">
              Create dynamic lists that automatically update according to subscriber activity
            </li>
          </ul>
        </section>
        <img
          alt="Advanced segmentation for best results"
          aria-label="image"
          height="250"
          loading="lazy"
          src="https://corp-backend.brevo.com/wp-content/uploads/2024/05/advanced_segmentation.webp"
          width="250"
          className="dist_marketing-media__graphic__iUmlw dist_marketing-media__graphic--small__B_1Xm style-kENdf"
          id="style-kENdf"
        />
      </section>

      <section
        className="flex flex-col md:flex-row dist_marketing-container__H_Hue dist_paddingTop__tfW4m dist_paddingBtm__WQaL9 dist_marketing-media__VBwmP"
        aria-labelledby="24/7-customer-support-from-real-humans"
        role="region"
        tabIndex="0"
      >
        <section className="dist_marketing-media__body__KhiUY">
          <h3 className="marketing-heading-5 dist_brevo-heading__utk3d" id="24/7-customer-support-from-real-humans">
            24/7 customer support from real humans
          </h3>
          <span className="marketing-typo_text-inter-3-regular">
            Our unparalleled customer care is provided in 6 languages via email, live chat, and social. Phone support is
            available on Business and Enterprise plans.
          </span>
          <ul className="dist_marketing-media__list__UfSQe">
            <li className="marketing-typo_text-inter-3-regular">Support available on all plans, including free</li>
            <li className="marketing-typo_text-inter-3-regular">Phone support available on Business and Enterprise plans</li>
            <li className="marketing-typo_text-inter-3-regular">
              Dedicated Customer Success Manager for Enterprise users, with 1 hour guaranteed response time
            </li>
          </ul>
        </section>
        <img
          alt="24/7 customer support from real humans"
          aria-label="image"
          height="250"
          loading="lazy"
          src="https://corp-backend.brevo.com/wp-content/uploads/2024/05/24_7_customer_support.webp"
          width="250"
          className="dist_marketing-media__graphic__iUmlw dist_marketing-media__graphic--small__B_1Xm style-Ma6on"
          id="style-Ma6on"
        />
      </section>
    </div>
  );
};

export default Marketing;
