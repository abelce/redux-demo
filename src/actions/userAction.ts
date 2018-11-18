import { createAction } from 'redux-actions';

export const REQUEST_IMAGR_CREATE = 'REQUEST_IMAGR_CREATE';
export const SUCCESS_IMAGR_CREATE = 'SUCCESS_IMAGR_CREATE';
export const FAILED_IMAGR_CREATE = 'FAILED_IMAGR_CREATE';
export const requestImageCreate = createAction(REQUEST_IMAGR_CREATE);
export const successImageCreate = createAction(SUCCESS_IMAGR_CREATE);

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN';
export const FAILED_LOGIN = 'FAILED_LOGIN';
export const requestLogin = createAction(REQUEST_LOGIN);
export const successLogin = createAction(SUCCESS_LOGIN);
