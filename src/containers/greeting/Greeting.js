import React, { useContext } from "react";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

import { Slide, Bounce, Fade } from "react-awesome-reveal";
export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <Slide triggerOnce>
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("🐸")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p subTitle"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
            </div>
          </div>

        </Slide>
        <Slide triggerOnce direction="right" delay={600}>
          <div className="greeting-image-div ">
            <img
              alt="Profile picture"
              src={require("../../assets/images/profile-pic-cropped2.JPG")}
            ></img>
          </div>
        </Slide>

      </div>
      <Slide triggerOnce delay={1000}>
        <div className="button-greeting-div">
          <Button text="Contact me" href="#contact" />
          {greeting.resumeLink && (
            <a
              href={require("../../assets/cv/resume.pdf")}
              download="Resume.pdf"
              className="download-link-button"
            >
              <Button text="Download my resume" />
            </a>
          )}
        </div>
      </Slide>
    </div >
  );
}
