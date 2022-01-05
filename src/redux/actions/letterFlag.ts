import {
  LetterFlagActionType,
  CHANGE_LETTER_FLAG,
} from "../actionInterfaces/letterFlagInterfaceAction";

export const changeLetterFlag = (flag: boolean): LetterFlagActionType => ({
  type: CHANGE_LETTER_FLAG,
  payload: flag,
});
