export const CHANGE_LETTER_FLAG = "CHANGE_LETTER_FLAG";

interface IChangeLetterFlag {
  type: typeof CHANGE_LETTER_FLAG;
  payload: boolean;
}

export type LetterFlagActionType = IChangeLetterFlag;
