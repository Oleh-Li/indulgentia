import { dataActionType, ADD_DATA_ITEM } from "../actionInterfaces/dataInterfaceAction";

export const addDataItem = (text: string):dataActionType => ({
  type: ADD_DATA_ITEM,
  payload: text,
});
