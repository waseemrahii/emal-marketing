import React from "react";
import Hero from "./Hero/Hero";
import EmailCampaign from "./EmailCompain/EmailCompain";
import Marketing from "./Marketing/Marketing";
import MarketingStrategy from "./MarketingStrategy/MarketingStrategy";
import FAQAccordion from "./FAQ/FAQAccordion";
// import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
       <EmailCampaign />
         <MarketingStrategy />
      <Marketing />
         <FAQAccordion />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
