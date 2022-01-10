import {
  LetterFlagActionType,
  CHANGE_LETTER_FLAG,
} from "../actionInterfaces/letterFlagInterfaceAction";

const initialState: boolean = false;

const letterFlagReducer = (
  state = initialState,
  action: LetterFlagActionType
) => {
  switch (action.type) {
    case CHANGE_LETTER_FLAG:
      return action.payload;

    default:
      return state;
  }
};

export default letterFlagReducer;
