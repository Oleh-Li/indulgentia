import {
  InputActionType,
  INPUT_CHANGE,
  INPUT_CLEAR,
} from "./../actionInterfaces/inputActionInterface";

export const inputChange = (text: string): InputActionType => ({
  type: INPUT_CHANGE,
  payload: text,
});

export const inputClear = () => ({
  type: INPUT_CLEAR,
});
