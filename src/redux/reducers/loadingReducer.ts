import { ILoading } from "./../../interfaces/index";
import {
  loadingActionType,
  IS_LOADING_TRUE,
  IS_LOADING_FALSE,
  IS_ERROR_TRUE,
  IS_ERROR_FALSE,
} from "../actionInterfaces/loadingInterfaceAction";

const initialState: ILoading = {
  isLoading: false,
  isError: false,
};

const loading = (state: ILoading = initialState, action: loadingActionType) => {
  switch (action.type) {
    case IS_LOADING_TRUE:
      return { ...state, isLoading: action.payload };
    case IS_LOADING_FALSE:
      return { ...state, isLoading: action.payload };
    case IS_ERROR_TRUE:
      return { ...state, isError: action.payload };
    case IS_ERROR_FALSE:
      return { ...state, isError: action.payload };

    default:
      return state;
  }
};

export default loading;
