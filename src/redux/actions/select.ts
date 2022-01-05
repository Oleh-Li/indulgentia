import {
  SelectActionType,
  SELECT_CHANGE,
} from "../actionInterfaces/selectInterfaceAction";

export const selectChange = (text: string): SelectActionType => ({
  type: SELECT_CHANGE,
  payload: text,
});
