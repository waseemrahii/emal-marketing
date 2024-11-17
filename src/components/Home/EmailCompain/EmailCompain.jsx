import React from 'react';
import './EmailCompain.css'
const EmailCampaign = () => {
  const howWorksItems = [
    {
      imgSrc: "https://www.spcdn.org/images/email/add_recipients.svg",
      imgAlt: "Grow your mailing list",
      title: "Grow your mailing list",
      description: [
        "Collect email addresses using free subscription forms or use your existing mailing list. Upload a file with email addresses, enter them manually, or import your mailing list from another bulk email service."
      ]
    },
    {
      imgSrc: "https://www.spcdn.org/images/email/create_letter.svg",
      imgAlt: "Create a unique branded template",
      title: "Create a unique branded template",
      description: [
        <>Use our convenient and intuitive <a href="/features/email/draganddropeditor">drag-and-drop template builder</a> or select one of our 130+ email templates. You can personalize your emails and add text, images, buttons, videos, and social media links.</>,
        "Your emails will be responsive to all screen sizes — you can check what they will look like using our desktop and mobile device preview."
      ]
    },
    {
      imgSrc: "https://www.spcdn.org/images/email/send_newsletter.svg",
      imgAlt: "Run your email campaigns",
      title: "Run your email campaigns",
      description: [
        <>Use <a href="/features/email/checker">SendPulse's built-in spam checker</a> to send bulk emails without getting blacklisted and improve your email deliverability.</>,
        "Follow our recommendations and click “Start” to send your campaign."
      ]
    },
    {
      imgSrc: "https://www.spcdn.org/images/email/analyze_results.svg",
      imgAlt: "Analyze your results",
      title: "Analyze your results",
      description: [
        <>You can improve your email marketing strategy by <a href="/features/email/analytics">analyzing your previous campaign results.</a></>,
        "You can also track your email traffic and conversion rates using analytics tools, such as Google Analytics."
      ]
    }
  ];

  return (
    <section className="section-create-first-email section-spacing-md pb-0 container pt-5">
      <div className="container">
        <h2 className="section-create-first-email__title section-title-h3 text-center">
          Create your first bulk email campaign
        </h2>
        <div className="section-lead text-center">
          Bring your email marketing strategy to life with SendPulse
        </div>
        <div className="how-works clearfix">
          {howWorksItems.map((item, index) => (
            <div
              key={index}
              className="how-works__item how-works__item--counter list-categories-block js-show-way"
            >
              <img
                className="how-works__item-img rounded-circle spacing-bottom-lg js-nolazy"
                src={item.imgSrc}
                alt={item.imgAlt}
              />
              <h3 className="benefit-title how-works__item-title">
                {item.title}
              </h3>
              <div className="how-works__item-descr text-muted">
                {item.description.map((desc, descIndex) => (
                  <p key={descIndex}>{desc}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmailCampaign;

