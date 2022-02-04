import {
  loadingActionType,
  IS_LOADING_TRUE,
  IS_LOADING_FALSE,
  IS_ERROR_TRUE,
  IS_ERROR_FALSE,
} from "./../actionInterfaces/loadingInterfaceAction";

export const loadingTrue = (): loadingActionType => ({
  type: IS_LOADING_TRUE,
  payload: true,
});

export const loadingFalse = (): loadingActionType => ({
  type: IS_LOADING_FALSE,
  payload: false,
});

export const errorTrue = (): loadingActionType => ({
  type: IS_ERROR_TRUE,
  payload: true,
});

export const errorFalse = (): loadingActionType => ({
  type: IS_ERROR_FALSE,
  payload: false,
});
