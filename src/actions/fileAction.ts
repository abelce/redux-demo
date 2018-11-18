import { createAction } from 'redux-actions';

// file
export const REQUEST_FILE_LIST = 'REQUEST_FILE_LIST';
export const requestFileList = createAction(REQUEST_FILE_LIST);
export const SUCCESS_FILE_LIST = 'SUCCESS_FILE_LIST';
