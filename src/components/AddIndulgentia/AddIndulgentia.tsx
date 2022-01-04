import React, { useState } from "react";
// import styles from "./addIndulgentia.module.css"
import { useSelector, useDispatch } from "react-redux";
import { IRootState, IItem } from "../../interfaces";
import { inputChange, inputClear } from "../../redux/actions/input";

const data: IItem[] = [
  {
    text: "Buy icecream",
    id: 1,
  },
];

const InputForm = () => {
  const [list, setList] = useState(data);

  const value = useSelector((state:IRootState) => state.input);
  const dispatch = useDispatch()

  const inputHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(inputChange(evt.currentTarget.value));
  };

  const onHandleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    setList([...list, { text: value, id: Date.now() }]);

    dispatch(inputClear());
  };

  console.log(list);
  console.log(value);
  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="input name"
          value={value}
          onChange={inputHandler}
        />
        <button type="submit">Buy</button>
      </form>

      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </>
  );
};

export default InputForm;
