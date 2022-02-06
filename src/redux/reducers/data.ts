import { IItem } from "./../../interfaces/index";
import {
  dataActionType,
  ADD_DATA_ITEM,
  DELETE_DATA_ITEM,
} from "./../actionInterfaces/dataInterfaceAction";

const initialState: IItem[] = [];

const dataReducer = (state = initialState, action: dataActionType) => {
  switch (action.type) {
    case ADD_DATA_ITEM:
      return [action.payload, ...state];

    case DELETE_DATA_ITEM:
      return state.filter((item) => !item.id.includes(action.payload.toString()));

    default:
      return state;
  }
};

export default dataReducer;
