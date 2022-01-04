import { IItem } from "./../../interfaces/index";
import {
  dataActionType,
  ADD_DATA_ITEM,
} from "../actionInterfaces/dataInterfaceAction";

export const addDataItem = (dataItem: IItem): dataActionType => ({
  type: ADD_DATA_ITEM,
  payload: dataItem,
});
