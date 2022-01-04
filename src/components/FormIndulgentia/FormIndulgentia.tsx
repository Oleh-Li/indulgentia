import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../interfaces";
import { inputChange, inputClear } from "../../redux/actions/input";
import { addDataItem } from "../../redux/actions/data";

const InputForm = () => {
  const value = useSelector((state: IRootState) => state.input);
  const dispatch = useDispatch();

  const inputHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputChange(evt.currentTarget.value));
  };

  const onHandleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(addDataItem({ text: value, id: Date.now() }));
    dispatch(inputClear());
  };

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <select name="make choise">
          <option value="lust">Lust</option>
          <option value="gluttony">Gluttony</option>
        </select>
        <input
          type="text"
          autoComplete="off"
          placeholder="input name"
          value={value}
          onChange={inputHandler}
        />
        <button type="submit">Buy</button>
      </form>
    </>
  );
};

export default InputForm;
