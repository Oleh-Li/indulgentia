import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../interfaces";
import { inputChange, inputClear } from "../../redux/actions/input";
import { addDataItem } from "../../redux/actions/data";
import { selectChange } from "../../redux/actions/select";
import { changeLetterFlag } from "../../redux/actions/letterFlag";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import fetchPic from "../../services/fetchPic";
import styles from "./formIndulgentia.module.css"

const InputForm = () => {
  const [myUrlPic, setMyUrlPic] = useState("");
  const dispatch = useDispatch();
  const inputValue = useSelector((state: IRootState) => state.input);
  const selectValue = useSelector((state: IRootState) => state.select);
  // const data = useSelector((state:IRootState)=>state.data)

  const inputHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputChange(evt.currentTarget.value));
  };

  const selectHandler = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectChange(evt.target.value));
  };

  useEffect(() => {
    fetchPic(selectValue, setMyUrlPic);
  }, [inputValue]);

  const onHandleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!inputValue.trim()) {
      toast.dismiss();
      toast.error("🦄 Oh, input name", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    
    dispatch(
      addDataItem({
        text: inputValue,
        id: Date.now(),
        select: selectValue,
        fetchedPic: myUrlPic,
      })
    );
    dispatch(changeLetterFlag(true));
    dispatch(inputClear());
  };

  return (
    <section className={styles.formIndilgentiaSection}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container">
        <div className={styles.formContainer}>
        <h2 className={styles.formIndulgentiaTitle}>Choose your Repentance</h2>
        <form className={styles.formIndulgentia} onSubmit={onHandleSubmit}>
          <select
            className={styles.formIndulgentiaSelect}
            onChange={selectHandler}
            name="make choise"
            value={selectValue}
          >
            <option value="Lust">Lust</option>
            <option value="Gluttony">Gluttony</option>
            <option value="Greed">Greed</option>
            <option value="Sloth">Sloth</option>
            <option value="Wrath">Wrath</option>
            <option value="Envy">Envy</option>
            <option value="Pride">Pride</option>
          </select>
          <input
            className={styles.formIndulgentiaInput}
            type="text"
            autoComplete="off"
            placeholder="input name"
            value={inputValue}
            onChange={inputHandler}
          />
          <button className={styles.button} type="submit">
            Buy
          </button>
        </form>
        </div>
      </div>
    </section>
  );
};

export default InputForm;
