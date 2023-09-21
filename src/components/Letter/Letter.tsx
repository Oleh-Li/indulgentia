import React from 'react'
import { useSelector } from "react-redux";
import { IRootState } from "../../interfaces";
import styles from "./letter.module.css"

const Letter = () => {
  const item = useSelector((state: IRootState) => state.data);

  return (
    <div className="container">
      <div className={styles.latterWrpper}>
        <img className={styles.letterImg} src={item[0].fetchedPic} alt="leetr-pic" />
        <h4 className={styles.letterHeader}>
          Hello {item[0].text} you are fogiven for your {item[0].select}
        </h4>
      </div>
    </div>
  );
};

export default Letter;
