import React from 'react';
import './MarketingStrategy.css'
const MarketingStrategy = () => {
  return (
    <section className="section-marketing-strategy section-spacing-lg pt-6 mt-16">
      <div className="flex flex-col" style={{display:"flex", flexDirection:"column"}} >
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <h2 className="section-marketing-strategy__title section-title-h3 text-center">
              Skyrocket your open, click-through, and conversion rates
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="section-lead text-center">
              Make the most of our service to achieve your email marketing goals
            </div>
          </div>
        </div>
        <div className="marketing-strategy container">
          <div className="row">
            <div className="col-lg-7 order-lg-1 d-lg-flex align-items-lg-center">
              <div className="marketing-strategy__img text-center text-lg-end w-100">
                <img
                  className="img-fluid style-AVTTc"
                  src="https://www.spcdn.org/images/email/email-page-eng/img-chain-a360.png"
                  alt="Create email campaigns with Automation 360"
                  width="702"
                  height="439"
                  id="style-AVTTc"
                />
              </div>
            </div>
            <div className="col-lg-5 order-lg-0 d-lg-flex align-items-lg-center">
              <div className="marketing-strategy__content">
                <h3 className="marketing-strategy__title feature-title spacing-bottom-lg">
                  Create email campaigns with Automation 360
                </h3>
                <div className="marketing-strategy__descr feature-descr spacing-bottom-lg">
                  <p>
                    Send welcome emails, bonus offers, abandoned cart reminders, thank-you emails, or notifications based on user actions.
                  </p>
                  <p>
                    <a href="/features/email/automation-360">Automation 360</a> allows you to create an automated flow using chatbot campaigns, web push notifications, emails, and SMS messages.
                  </p>
                </div>
                <a className="marketing-strategy__link btn-signup" href="javascript:void(0);">
                  Build an automated campaign →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingStrategy;







