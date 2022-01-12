import React from "react";
import "./formIndulgentia.css"
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../interfaces";
import { inputChange, inputClear } from "../../redux/actions/input";
import { addDataItem } from "../../redux/actions/data";
import { selectChange } from "../../redux/actions/select";
import { changeLetterFlag } from "../../redux/actions/letterFlag";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const InputForm = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state: IRootState) => state.input);
  const selectValue = useSelector((state: IRootState) => state.select);

  const inputHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputChange(evt.currentTarget.value));
  };

  const selectHandler = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectChange(evt.target.value));
  };

  const onHandleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(!inputValue.trim()){
      console.log("inpur something")
      toast.dismiss()
      toast.error('🦄 Oh, input name', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        
        });
return
    }
    dispatch(
      addDataItem({ text: inputValue, id: Date.now(), select: selectValue })
    );
    dispatch(changeLetterFlag(true));
    dispatch(inputClear());
  };

  return (
    <section className="form-indilgentia-section">
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
    <div className="container form-container">
      <h2 className="form-indulgentia_title" >Choose your Destiny</h2>
      <form className="form-indulgentia" onSubmit={onHandleSubmit}>
        <select className="form-indulgentia_select" onChange={selectHandler} name="make choise">
          <option value="Lust">Lust</option>
          <option value="Gluttony">Gluttony</option>
          <option value="Greed">Greed</option>
          <option value="Sloth">Sloth</option>
          <option value="Wrath">Wrath</option>
          <option value="Envy">Envy</option>
          <option value="Pride">Pride</option>
        </select>
        <input
        className="form-indulgentia_input"
          type="text"
          autoComplete="off"
          placeholder="input name"
          value={inputValue}
          onChange={inputHandler}
        />
        <button className="button" type="submit">Buy</button>
      </form>
    </div>
    </section>
  );
};

export default InputForm;
