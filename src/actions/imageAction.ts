import { createAction } from 'redux-actions'
import { create } from 'domain';

export const REQUEST_IMAGR_CREATE = 'REQUEST_IMAGR_CREATE';
export const SUCCESS_IMAGR_CREATE = 'SUCCESS_IMAGR_CREATE';
export const FAILED_IMAGR_CREATE = 'FAILED_IMAGR_CREATE';
export const requestImageCreate = createAction(REQUEST_IMAGR_CREATE);
export const successImageCreate = createAction(SUCCESS_IMAGR_CREATE);

export const REQUEST_IMAGR_LIST = 'REQUEST_IMAGR_LIST';
export const SUCCESS_IMAGR_LIST = 'SUCCESS_IMAGR_LIST';
export const FAILED_IMAGR_LIST = 'FAILED_IMAGR_LIST';
export const requestImageList = createAction(REQUEST_IMAGR_LIST);
export const successImageList = createAction(SUCCESS_IMAGR_LIST);