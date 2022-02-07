import { IItem } from "./../../interfaces/index";
import {
  dataActionType,
  FETCH_DATA_ITEMS,
  ADD_DATA_ITEM,
  DELETE_DATA_ITEM,
} from "../actionInterfaces/dataInterfaceAction";

export const fetchDataItems = (fetchedDataItems: any) => ({
  type: FETCH_DATA_ITEMS,
  payload: fetchedDataItems,
});

export const addDataItem = (dataItem: IItem): dataActionType => ({
  type: ADD_DATA_ITEM,
  payload: dataItem,
});

export const deleteDataItem = (id: string) => ({
  type: DELETE_DATA_ITEM,
  payload: id,
});
