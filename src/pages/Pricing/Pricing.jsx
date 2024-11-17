import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Pricing.css";

const PricingCard = () => {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get("https://email-backend-nine.vercel.app/api/packages");
        const formattedPlans = response.data.map((plan) => ({
          title: `${plan.type.charAt(0).toUpperCase() + plan.type.slice(1)} Package`,
          description: plan.type === "free" ? "Ideal for small businesses and startups." : "Best for professionals and growing teams.",
          maxEmailsPerMonth: plan.maxEmailsPerMonth,
          maxEmailsSentPerMonth: plan.maxEmailsSentPerMonth,
          packageDuration: `${plan.packageDuration} days`,
          currentPrice: `$${plan.price}.00`,
          features: [
            `Up to ${plan.maxEmailsPerMonth} Emails`,
            `${plan.maxEmailsSentPerMonth} Emails Sent Per Month`,
          ],
          popular: plan.type === "professional",
        }));
        setPlans(formattedPlans);
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };

    fetchPlans();
  }, []);

  const handleChoosePlan = (plan) => {
    navigate("/cart", { state: { plan } });
  };

  return (
    <div className="h-pricing-card__wrapper">
      <div className="h-pricing-card__row">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`h-pricing-card__container ${plan.popular ? "h-popular" : ""}`}
          >
            {/* {plan.popular && <div className="h-badge">Most Popular</div>} */}
            <h2 className="h-pricing-card__title">{plan.title}</h2>
            <p className="h-pricing-card__description">{plan.description}</p>
            <div className="h-pricing-card__details">
              <p><strong>Max Emails Per Month:</strong> {plan.maxEmailsPerMonth}</p>
              <p><strong>Max Emails Sent Per Month:</strong> {plan.maxEmailsSentPerMonth}</p>
              <p><strong>Package Duration:</strong> {plan.packageDuration}</p>
            </div>
            <div className="h-dynamic-size-price">
              <span className="h-price">{plan.currentPrice}</span>
            </div>
            <button className="h-button" onClick={() => handleChoosePlan(plan)}>Choose plan</button>
            <div className="h-pricing-card__separator"></div>
            <div className="h-pricing-card__features--grouped">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="h-plan-feature">
                  <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 16 16">
                    <path
                      fill="#00b090"
                      d="M12 8.758a.694.694 0 0 1-.217.515l-5.605 5.485-1.053 1.03A.725.725 0 0 1 4.6 16a.724.724 0 0 1-.527-.212l-1.053-1.03-2.803-2.743A.694.694 0 0 1 0 11.5c0-.202.072-.374.217-.515l1.053-1.03a.725.725 0 0 1 .526-.213c.207 0 .382.071.527.213L4.6 12.19l5.078-4.977c.14-.14.33-.216.527-.212.206 0 .382.07.526.212l1.053 1.03c.142.134.22.321.217.516Z"
                    />
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
