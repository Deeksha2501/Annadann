import React, { Component } from "react";
import vol from './vol.png'
import '../Contact/contact.css'
// import "./getinvolved.css";
import Header from './getInvolvedHeader'
import Footer from '../footer/Footer'

export default class GetInvolved extends Component {
  render() {
    return (
      <>
      <Header/>
        <div className="top-img">
          <img src={vol} alg="Image of students oragninsing camp" />
        </div>

        <div className="camp-detail">
          <p className="ques">VOLUNTEER/INTERN</p>
          <p className="detail">
            “Volunteers don’t necessarily have time, but they have heart. As
            Volunteer, you will learn not just more about the needs of others,
            you will also learn more about your own needs and you will discover
            that in helping other, you help yourself most of all. A Volunteer
            can be anybody. There is no age limit to begin a volunteer, no
            preferred categories, no salary specification, no special degree or
            work experience. All that is required is a dedication to the cause,
            sincerity about the work that one in doing and commitment to a
            regular and sustained efforts with the organisation.” – MAHATAMA
            GANDHI ANNADAN is only a medium to connect you to some hardcore
            realities of this country. Visit our nearest Office cum Processing
            Center to better understand the work.
          </p>
          <p className="ques">Help in building a chain for revolutiion </p>

          <p className="detail">
            Talk to 10: Beyond money and material, spread the word around in
            your own network of friends, family and colleagues to get more
            people to take some positive action. It could be about sponsoring
            Kits, Payroll Giving with a corporate, spreading the word about our
            initiatives, connecting to wholesalers and retail chains for unsold
            material/dead inventory or connecting with transporters for pro
            bono/ subsidized services.
          </p>
          <p className="ques">Collection Camps </p>

          <p className="detail">
            In April and October, wherever you are, you can organize a
            collection camp for us, in your city and drop collected material to
            our nearest office.
          </p>
        </div>
        <Footer/>
      </>
    );
  }
}
