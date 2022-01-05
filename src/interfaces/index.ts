export interface IItem {
  text: string;
  id: number;
  select: string;
}

export interface IData {
  data: IItem[];
}

// export type Select =  string;

export interface IRootState {
  input: string;
  data: IItem[];
  select: string;
  letterFlag: boolean;
}
