
export interface IItem {
  readonly text: string;
  readonly id: string;
  readonly select: string;
  readonly fetchedPic: string;
}

export interface IData {
  data: IItem[];
}

export interface IRootState {
  input: string;
  data: IItem[];
  select: string;
  letterFlag: boolean;
 readonly loadind: ILoading;
}

export interface ILoading {
  isLoading: boolean;
  isError: boolean;
}
