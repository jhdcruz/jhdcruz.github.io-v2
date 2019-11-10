import React, {Component} from "react";

import AOS from "dependency/aos/dist/aos";
import "dependency/aos/dist/aos.css";
import "./styles/Introduction.scss";

export default class Introduction extends Component {
  componentWillMount() {
    AOS.init();
  }

  render() {
    return (
      <div className="hero-body">
        <div className="container" data-aos="fade" data-aos-duration="2500">
          <h1 className="title">Front-End Web Development</h1>
          <h2 className="subtitle">
            Duis cillum cillum voluptate voluptate minim proident fugiat
            deserunt anim fugiat reprehenderit.
          </h2>
          <div className="field is-grouped">
            <a
              href="#projects"
              className="button is-outlined"
              data-aos="fade-in"
              data-aos-delay="1100"
            >
              <i className="fab fa-git-alt"/>
              Projects & Contributions
            </a>
            <a
              href="#contact"
              className="button is-outlined"
              data-aos="fade-in"
              data-aos-delay="1100"
            >
              <i className="fas fa-envelope"/>
              Contact
            </a>
          </div>
        </div>
      </div>
    );
  }
}
