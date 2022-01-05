import {
  LetterFlagActionType,
  CHANGE_LETTER_FLAG,
} from "../actionInterfaces/letterFlagInterfaceAction";

const initialState: boolean = false;

export default (state = initialState, action: LetterFlagActionType) => {
  switch (action.type) {
    case CHANGE_LETTER_FLAG:
      return action.payload;

    default:
     return state;
  }
};
