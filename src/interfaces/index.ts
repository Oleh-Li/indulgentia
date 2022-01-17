export interface IItem {
  text: string;
  id: number;
  select: string;
  fetchedPic: string
}

export interface IData {
  data: IItem[];
}


export interface IRootState {
  input: string;
  data: IItem[];
  select: string;
  letterFlag: boolean;
}
