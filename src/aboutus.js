import React from "react";
import Reach from "./reach";
import aboutimg from "./aboutUs.jpg";
import stats from "./bg-stats.jpg";
import "./about.css";

const AboutUs = () => {
  return (
    <div>
      <div id="aboutus" className="about_con">
        <div className="about_left">
          <h1>About NGO Foundation</h1>
          <p>
            Annadann Foundation, an NGO with the objective to provide food
            forthe economically weaker sections of our society, is an NGO in
            India directly benefitting over 15,00,000 children and their
            families every year, through more than 400 live welfare projects on
            healthcare, livelihood , malnutrition in over 2000 remote villages
            and slums across 25 states of India. We find the people living on
            pavements and doing daily labor work, doing some small chores,
            selling small cheap products etc. They are not having their own
            home. They make their food on pavements after coming back at night
            from the daily wages they earn. During the covid period we need help
            please help .Annadan aims to build an equitable relationship of
            strength, sustenance and dignity between the cities and villages
            using the under-utilized urban material as a tool to trigger
            development with dignity, across the country.. We do this through
            well-planned and comprehensive programmes in health, education,
            livelihoods and disaster preparedness and response. CARE India is
            collaborating with development partners in fighting COVID-19 health
            crisis. We are helping frontline workers stay safe with PPE,
            distributing dry rations to feed the needy, raising awareness in our
            programme areas.
          </p>
        </div>
        <div className="about_right">
          <img src={aboutimg} />
        </div>
      </div>
      <Reach />
      <img src={stats} style={{ width: "100%" }} />
    </div>
  );
};
export default AboutUs;
