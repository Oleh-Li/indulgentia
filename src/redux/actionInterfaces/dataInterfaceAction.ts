import { IItem } from "./../../interfaces/index";
export const ADD_DATA_ITEM = "ADD_DATA_ITEM";
export const DELETE_DATA_ITEM = "DELETE_DATA_ITEM";

interface IAddDataItem {
  type: typeof ADD_DATA_ITEM;
  payload: IItem;
}

interface IDeleteDataItem {
  type: typeof DELETE_DATA_ITEM;
  payload: number;
}

export type dataActionType = IAddDataItem | IDeleteDataItem;
