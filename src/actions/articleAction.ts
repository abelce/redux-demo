import { createAction } from 'redux-actions'
import * as constants from '../constants';

export const getArticleList = createAction(constants.GET_ARITICLE_LIST);

export const getArticleById = createAction(constants.GET_ARTICLE_BY_ID);

export const createArticle = createAction(constants.CREATE_ARTICLE);

export const updateArticle = createAction(constants.UPDATE_ARTICLE);