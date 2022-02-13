export const IS_LOADING_TRUE = "IS_LOADING_TRUE";
export const IS_LOADING_FALSE = "IS_LOADING_FALSE";
export const IS_ERROR_TRUE = "IS_ERROR_TRUE";
export const IS_ERROR_FALSE = "IS_ERROR_FALSE";

interface IIsLoadingTrue {
  type: typeof IS_LOADING_TRUE;
  payload: boolean;
}

interface IIsLoadingFalse {
  type: typeof IS_LOADING_FALSE;
  payload: boolean;
}

interface IIsErrorTrue {
  type: typeof IS_ERROR_TRUE;
  payload: boolean;
}

interface IIsErrorFalse {
  type: typeof IS_ERROR_FALSE;
  payload: boolean;
}

export type loadingActionType =
  | IIsLoadingTrue
  | IIsLoadingFalse
  | IIsErrorTrue
  | IIsErrorFalse;
