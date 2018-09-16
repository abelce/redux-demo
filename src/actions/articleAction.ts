import { createAction } from 'redux-actions'
import * as constants from '../constants';

// articel list
export const REQUEST_ARTICLE_LIST = 'REQUEST_ARTICLE_LIST';
export const SUCCESS_ARTICLE_LIST = 'SUCCESS_ARTICLE_LIST';
export const FAILURE_ARTICLE_LIST = 'FAILURE_ARTICLE_LIST';
export const requestArticleList = createAction(REQUEST_ARTICLE_LIST);
export const successArticleList = createAction(SUCCESS_ARTICLE_LIST);
export const failureArticleList = createAction(FAILURE_ARTICLE_LIST);

// article by id
export const REQUEST_ARTICLE_BY_ID = 'REQUEST_ARTICLE_BY_ID';
export const SUCCESS_ARTICLE_BY_ID = 'SUCCESS_ARTICLE_BY_ID';
export const FAILURE_ARTICLE_BY_ID = 'FAILURE_ARTICLE_BY_ID';
export const requestArticleById = createAction(REQUEST_ARTICLE_BY_ID);
export const successArticleById = createAction(SUCCESS_ARTICLE_BY_ID);
export const failureArticleById = createAction(FAILURE_ARTICLE_BY_ID);

// article create
export const REQUEST_ARTICLE_CREATE = 'REQUEST_ARTICLE_CREATE';
export const SUCCESS_ARTICLE_CREATE = 'SUCCESS_ARTICLE_CREATE';
export const FAILURE_ARTICLE_CREATE = 'FAILURE_ARTICLE_CREATE';
export const requestArticleCreate = createAction(REQUEST_ARTICLE_CREATE);
export const successArticleCreate = createAction(SUCCESS_ARTICLE_CREATE);
export const failureArticleCreate = createAction(FAILURE_ARTICLE_CREATE);

// article update
export const REQUEST_ARTICLE_UPDATE = 'REQUEST_ARTICLE_UPDATE';
export const SUCCESS_ARTICLE_UPDATE = 'SUCCESS_ARTICLE_UPDATE';
export const FAILURE_ARTICLE_UPDATE = 'FAILURE_ARTICLE_UPDATE';
export const requestArticleUpdate = createAction(REQUEST_ARTICLE_UPDATE);
export const successArticleUpdate = createAction(SUCCESS_ARTICLE_UPDATE);
export const failureArticleUpdate = createAction(FAILURE_ARTICLE_UPDATE);

// article delete
export const REQUEST_ARTICLE_DELETE = 'REQUEST_ARTICLE_DELETE';
export const SUCCESS_ARTICLE_DELETE = 'SUCCESS_ARTICLE_DELETE';
export const FAILURE_ARTICLE_DELETE = 'FAILURE_ARTICLE_DELETE';
export const requestArticleDelete = createAction(REQUEST_ARTICLE_DELETE);
export const successArticleDelete = createAction(SUCCESS_ARTICLE_DELETE);
export const failureArticleDelete = createAction(FAILURE_ARTICLE_DELETE);

// file
export const REQUEST_FILE_LIST = 'REQUEST_FILE_LIST';
export const requestFileList = createAction(REQUEST_FILE_LIST);
export const SUCCESS_FILE_LIST = 'SUCCESS_FILE_LIST';

