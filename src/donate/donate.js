import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import "./donate.css";
import "../signup/signup.css";
import Axios from "axios";
var userData = {};

export default class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: {},
      name: "",
      username: "",
      contactNumber: "",
      date: "",
      people: "",
      type: "",
      comment: "",
      camp: "",
      redirect: false,
    };
  }
  componentDidMount() {
    Axios.get("/auth/current_user", { withCredentials: true }).then((res) => {
      console.log(res);
      this.setState({ auth: res.data });
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    let camp = document.getElementById("camp");
    this.state.camp = camp.options[camp.selectedIndex].text;
    console.log(this.state.camp);
    this.state.type = document.querySelector('input[name="type"]:checked').id;
    console.log(this.state.type);
    e.preventDefault();
    userData = {
      username: this.state.auth.username,
      people: this.state.people,
      date: this.state.date,
      comment: this.state.comment,
      name: this.state.auth.name,
      camp: this.state.camp,
      type: this.state.type,
      contactNumber: this.state.auth.contactNumber,
    };
    console.log(userData);
    Axios.post("/donate", userData)

      .then((res) => {
        console.log(res.config.data);
        if (res.data) {
          console.log("Successfully doated");
          this.setState({ redirect: true });
        } else console.log(" error");
      })
      .catch((err) => console.log(err.response.data));
  };
  render() {
    return (
      <>
        <div className=" register">
          <div className="new-CloseButton">
            <em
              className="icon-cancel"
              onClick={(event) => (window.location.href = "/")}
            >
              <i className="fas fa-times" style={{ marginTop: "20px" }}></i>
            </em>
          </div>
          <div className=" register-left">
            <img src={require("./donate.png")} />
            <h1>DONATE</h1>
            <p>
              Donating for a good cause never makes someone poor,it makes you
              rich by good deed
            </p>
          </div>
          <div className=" register-right">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <h3 className="register-heading">
                  Help in the difficult times
                </h3>

                <div className="row register-form">
                  <div className="loginRegisterForm">
                    <form name="registerForm">
                      <ul className="signupSteps activeStep">
                        <li>
                          <div>
                            <span className="enteredEmail">
                              {this.state.auth.name}
                            </span>
                          </div>
                        </li>

                        <li>
                          <div className="relativeRow">
                            <input
                              placeholder="Date"
                              name="date"
                              type="date"
                              onChange={(e) => this.handleChange(e)}
                              id="date"
                            ></input>
                          </div>
                        </li>
                        <li>
                          <div className="relativeRow">
                            <input
                              type="number"
                              placeholder="no. of people you want to help*"
                              id="people"
                              onChange={(e) => this.handleChange(e)}
                            />
                          </div>
                        </li>
                        <li>
                          <div className="relativeRow">
                            <label className="radio ">
                              <input
                                type="radio"
                                name="type"
                                id="dry-ration"
                                checked
                                style={{ height: "20px" }}
                              />
                              <span> Dry Ration </span>
                            </label>
                            <label className="radio inline">
                              <input
                                type="radio"
                                name="type"
                                id="cooked-food"
                                style={{ height: "20px" }}
                              />
                              <span> Cooked food </span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="input-container">
                            <div>
                              <span className="enteredEmail">
                                {this.state.auth.username}
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div>
                            <span className="enteredEmail">
                              {this.state.auth.contactNumber}
                            </span>
                          </div>
                        </li>
                        <li>
                          <div className="relativeRow">
                            <select
                              className="form-control"
                              style={{ height: "42px" }}
                              id="camp"
                            >
                              <option className="hidden" selected disabled>
                                Please select your nearest donation camp
                              </option>
                              <option>DELHI</option>
                              <option>MUMBAI</option>
                              <option>PATNA</option>
                            </select>
                          </div>
                        </li>
                        <li>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Additional Comment *"
                            id="comment"
                            onChange={(e) => this.handleChange(e)}
                          />
                        </li>
                        <li>
                          <button
                            type="submit"
                            className="btnRegister"
                            onClick={this.onSubmit}
                          >
                            <span className="icon-right"></span> Submit{" "}
                          </button>
                        </li>
                      </ul>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`commonPopUp ${this.state.redirect ? "active" : ""}`}>
            <div className="popOverlay"></div>
            <div className="popHolder ">
              <div className="new-CloseButton">
                <em
                  className="icon-cancel"
                  onClick={(event) => (window.location.href = "/")}
                >
                  <i className="fas fa-times" style={{ marginTop: "20px" }}></i>
                </em>
              </div>
              <img
                style={{ width: "690px", height: "500px" }}
                src={require("../donation-day-doodle-concept-pattern-background-vector-thank-you-page-blood-donors-website-boy-holds-heart-as-life-188319458.jpg")}
                alt="Thank You!"
              ></img>
            </div>
          </div>
        </div>
      </>
    );
  }
}
