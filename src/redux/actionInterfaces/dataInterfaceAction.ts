import { IItem } from "./../../interfaces/index";
export const ADD_DATA_ITEM = "ADD_DATA_ITEM";
export const DELETE_DATA_ITEM = "DELETE_DATA_ITEM";
export const FETCH_DATA_ITEMS = "FETCH_DATA_ITEMS";

interface IFetchDataItems {
  type: typeof FETCH_DATA_ITEMS;
  payload: IItem[];
}

interface IAddDataItem {
  type: typeof ADD_DATA_ITEM;
  payload: IItem;
}

interface IDeleteDataItem {
  type: typeof DELETE_DATA_ITEM;
  payload: number;
}

export type dataActionType = IFetchDataItems | IAddDataItem | IDeleteDataItem;
