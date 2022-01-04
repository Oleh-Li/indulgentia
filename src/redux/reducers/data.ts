import { IItem } from "./../../interfaces/index";
import {
  dataActionType,
  ADD_DATA_ITEM,
} from "./../actionInterfaces/dataInterfaceAction";

const initialState: IItem[] = [];

export default (state = initialState, action: dataActionType) => {
  switch (action.type) {
    case ADD_DATA_ITEM:
      return [...state, action.payload];

    default:
      return state;
  }
};
