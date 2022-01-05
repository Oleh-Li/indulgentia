import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../interfaces";
import { inputChange, inputClear } from "../../redux/actions/input";
import { addDataItem } from "../../redux/actions/data";
import { selectChange } from "../../redux/actions/select";
import { changeLetterFlag } from "../../redux/actions/letterFlag";

const InputForm = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state: IRootState) => state.input);
  const selectValue = useSelector((state: IRootState) => state.select);
  const letterFlagValue = useSelector((state: IRootState) => state.letterFlag);

  const inputHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputChange(evt.currentTarget.value));
  };

  const selectHandler = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectChange(evt.target.value));
  };

  const onHandleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(
      addDataItem({ text: inputValue, id: Date.now(), select: selectValue })
    );
    dispatch(changeLetterFlag(true));
    dispatch(inputClear());
  };

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <select onChange={selectHandler} name="make choise">
          <option value="lust">Lust</option>
          <option value="gluttony">Gluttony</option>
        </select>
        <input
          type="text"
          autoComplete="off"
          placeholder="input name"
          value={inputValue}
          onChange={inputHandler}
        />
        <button type="submit">Buy</button>
      </form>
    </>
  );
};

export default InputForm;
