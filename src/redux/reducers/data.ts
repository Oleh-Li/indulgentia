import {
  dataActionType,
  ADD_DATA_ITEM,
} from "./../actionInterfaces/dataInterfaceAction";

const initialState: [] = [];

export default (state = initialState, action: dataActionType) => {
  switch (action.type) {
    case ADD_DATA_ITEM:
      return [...state]

    default:
      return state;
  }
};
