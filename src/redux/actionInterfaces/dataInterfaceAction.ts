import { IItem } from './../../interfaces/index';
export const ADD_DATA_ITEM = "ADD_DATA_ITEM"


 interface IAddDataItem{
    type: typeof ADD_DATA_ITEM,
    payload: IItem
}

export type dataActionType = IAddDataItem