import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../interfaces";
import fetchPic from "../../../services/fetchPic";

const AboutUsPage = () => {
  const [myUrlPic, setMyUrlPic] = useState("");
  const selectValue = useSelector((state: IRootState) => state.select);
  console.log("selectValue", selectValue);
  useEffect(() => {
    fetchPic(selectValue, setMyUrlPic);
  });
  console.log(" myUrlPic", myUrlPic);
  return (
    <>
      <h3>AboutUsPage</h3>
      <img src={myUrlPic} alt="fetchedPic" width="400px" />
    </>
  );
};

export default AboutUsPage;
