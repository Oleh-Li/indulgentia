import React from "react";
import styles from "./aboutPageStyles.module.css";
import { ReactComponent as GitHubSvg } from "../../../img/githubIcon.svg";
import { ReactComponent as InstagramSvg } from "../../../img/icons8-instagram.svg";
import { Typography } from "@material-ui/core";
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HouseIcon from '@mui/icons-material/House';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

interface ListProps {
  text: string
  icon: React.ReactElement<any>
}

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
        <ul className={styles.personalInfo}>
          {list.map(({ text, icon }, idx) => {
            return <li key={idx} style={{ display: "flex", alignItems: "center" }}>
              <svg height={24} width={24}>{icon}</svg>
              <Typography style={{ marginLeft: "8px" }} color="textSecondary" variant="h6">{text}</Typography>
            </li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default AboutUsPage;

const list: ListProps[] = [
  { text: "Name: Oleh Lizun", icon: <PersonIcon /> },
  { text: "Date of birth: 06-Aprl-1989", icon: <CalendarMonthIcon /> },
  { text: "Adress: Kyiv, Ukraine", icon: <HouseIcon /> },
  { text: "Phone: +380938381149", icon: <PhoneInTalkIcon /> },
  { text: "Email: rrrgo3@gmail.com", icon: <AlternateEmailIcon /> }
]
