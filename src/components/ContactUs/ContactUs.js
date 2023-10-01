import React from "react";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";
import classes from "./ContactUs.css";

const contactus = () => (
  <Auxiliary>
    <div className={classes.HeroImage}>
      <div className={classes.Box}>
        <div className={classes.Header}>
          <div className={classes.Title}>Contact Me</div>
          <div className={classes.UnderLine}></div>
        </div>
        <div className={classes.Set1}>
          <a
            href="https://www.linkedin.com/in/savitri-khyadad/"
            target="./dummy"
          >
            <img src="./linkedin.svg" alt="linkedin icon" />
          </a>
          <a href="https://github.com/Savitri-Khyadad" target="./dummy">
            <img src="./github.svg" alt="github icon" />
          </a>
          <a href="https://www.instagram.com/" target="./dummy">
            <img src="./instagram.svg" alt="instagram icon" />
          </a>
        </div>
        <div className={classes.Set2}>
          <a href="https://www.twitter.com/" target="./dummy">
            <img src="./twitter.svg" alt="twitter icon" />
          </a>
          <a href="https://www.facebook.com/" target="./dummy">
            <img src="./facebook.svg" alt="facebook icon" />
          </a>
          <a href="https://www.gmail.com/" target="./dummy">
            <img src="./gmail.svg" alt="gmail icon" />
          </a>
        </div>
      </div>
    </div>
  </Auxiliary>
);

export default contactus;
