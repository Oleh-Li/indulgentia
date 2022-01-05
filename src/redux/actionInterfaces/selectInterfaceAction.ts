
export const SELECT_CHANGE = "SELECT_CHANGE";

interface ISelectChange {
  type: typeof SELECT_CHANGE;
  payload: string;
}

export type SelectActionType = ISelectChange;
