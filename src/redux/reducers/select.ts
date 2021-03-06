import {
  SelectActionType,
  SELECT_CHANGE,
} from "../actionInterfaces/selectInterfaceAction";

const initialState: string = "lust";

 const selectReducer = (state = initialState, action: SelectActionType) => {
  switch (action.type) {
    case SELECT_CHANGE:
      return action.payload;
    default:
      return state;
  }
};

export default selectReducer
