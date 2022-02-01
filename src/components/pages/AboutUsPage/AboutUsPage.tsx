import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../interfaces";
import fetchPic from "../../../services/fetchPic";
import styles from "./aboutPageStyles.module.css"

const AboutUsPage = () => {
  const [myUrlPic, setMyUrlPic] = useState("");
  const selectValue = useSelector((state: IRootState) => state.select);
  console.log("selectValue", selectValue);
  useEffect(() => {
    fetchPic(selectValue, setMyUrlPic);
  },[selectValue]);
  console.log(" myUrlPic", myUrlPic);
  return (
    <div className="container">
      <p className={styles.title}>AboutUsPage</p>
      <img src={myUrlPic} alt="fetchedPic" width="400px" />
    </div>
  );
};

export default AboutUsPage;
