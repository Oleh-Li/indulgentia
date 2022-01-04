export const ADD_DATA_ITEM = "ADD_DATA_ITEM"


 interface IAddDataItem{
    type: typeof ADD_DATA_ITEM,
    payload: string
}

export type dataActionType = IAddDataItem