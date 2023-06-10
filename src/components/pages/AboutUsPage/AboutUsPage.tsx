import React from "react";
import styles from "./aboutPageStyles.module.css";
import { ReactComponent as GitHubSvg } from "../../../img/githubIcon.svg";
import { ReactComponent as InstagramSvg } from "../../../img/icons8-instagram.svg";

const AboutUsPage = () => {
  return (
    <div className="container">
      <div className={styles.pictureContainer}>
        <div className={styles.flagBordet}>
          <div className={styles.flag}></div>
        </div>
        <div className={styles.picrureTextWrapper}>
          <p className={styles.picTitle}>CV Oleh Lizun ReactJs Developer</p>
          <p className={styles.picSubTitle}>
            It's easy when you're doing something you love.
          </p>
        </div>

        <ul className={styles.linksWrapper}>
          <li>
            <a className={styles.linkItemSvg} href="https://github.com/Oleh-Li">
              <GitHubSvg />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/oleh_lee/">
              <InstagramSvg />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.photoAndInfoWrapper}>
        <div className={styles.mePhoto}>
          <div className={styles.flagWrapper}>
            <div className={styles.topColor} />
            <div className={styles.bottomColor} />
          </div>
        </div>
        <div className={styles.personalInfo}>
          <p className={styles.textPersonalInfo}>Name: Oleh Lizun</p>
          <p className={styles.textPersonalInfo}>Date of birth: 06-Aprl-1989</p>
          <p className={styles.textPersonalInfo}>Adress: Kyiv, Ukraine</p>
          <p className={styles.textPersonalInfo}>Phone: +380938381149</p>
          <p className={styles.textPersonalInfo}>Email: rrrgo3@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
