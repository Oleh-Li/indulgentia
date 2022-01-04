
export interface IItem {
  text: string;
  id: number;
}

export interface IData {
  data: IItem[];
}

export interface IRootState {
  input: string;
  data: IItem[]
}


