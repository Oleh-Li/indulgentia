import { IItem } from "./../../interfaces/index";
import {
  dataActionType,
  FETCH_DATA_ITEMS,
  ADD_DATA_ITEM,
  DELETE_DATA_ITEM,
} from "../actionInterfaces/dataInterfaceAction";
import fetchDataItemsFromFirebase from "../../services/fetchDataItems";

export const fetchDataItems = () => {
  return async function (dispatch: (param: any) => void) {
    const data = await fetchDataItemsFromFirebase()
    dispatch({ type: FETCH_DATA_ITEMS, payload: data })
  }
};

export const addDataItem = (dataItem: IItem): dataActionType => ({
  type: ADD_DATA_ITEM,
  payload: dataItem,
});

export const deleteDataItem = (id: string) => ({
  type: DELETE_DATA_ITEM,
  payload: id,
});
