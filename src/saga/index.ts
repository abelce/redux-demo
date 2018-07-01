import { call, take, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import {
  REQUEST_ARTICLE_LIST,
  SUCCESS_ARTICLE_LIST,
  REQUEST_ARTICLE_BY_ID,
  SUCCESS_ARTICLE_BY_ID,
  REQUEST_ARTICLE_CREATE,
  SUCCESS_ARTICLE_CREATE,
  REQUEST_ARTICLE_UPDATE,
  SUCCESS_ARTICLE_UPDATE,

} from '../actions/articleAction';
import { Article } from '../types';

const AxiosInstance = axios.create({
  baseURL: 'http://111.231.192.70:9001',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'Content-Type': 'application/json;charset=utf-8',
  }
});

const buildArticleData = (article: Article) => {
  article.description = article.markdowncontent.substr(0, 200);
  article.tags = article.tags.join(',');
  return article;
}

function* fetchArtices(url: string) {
  const response = yield call(AxiosInstance.get, url);
  yield put({type: SUCCESS_ARTICLE_LIST, data: response});
}

function* fetchArticeByID(url: string) {
  const response = yield call(AxiosInstance.get, url);
  yield put({type: SUCCESS_ARTICLE_BY_ID, data: response});
}

function* createArticle({url, article, onSuccess}: any) {
  const response = yield call(AxiosInstance.post, url, buildArticleData(article));
  yield put({type: SUCCESS_ARTICLE_CREATE, data: response});
  onSuccess();
}

function* udpateArticle({url, article, onSuccess}: any) {
  const response = yield call(AxiosInstance.put, url, buildArticleData(article));
  yield put({type: SUCCESS_ARTICLE_UPDATE, data: response, article});
  onSuccess();
}

function* watchFetchArticleList() {
  while(true) {
    let action = yield take(REQUEST_ARTICLE_LIST);
    yield fork(fetchArtices, action.payload);
  }
}

function* watchFetchArticleById() {
  while(true){
    let action = yield take(REQUEST_ARTICLE_BY_ID);
    yield fork(fetchArticeByID, action.payload);
  }
}

function* watchArticleCreate() {
  while(true) {
    let action = yield take(REQUEST_ARTICLE_CREATE);
    yield fork(createArticle, action.payload);
  }
}

function* watchArticleUpdate() {
  while(true) {
    let action = yield take(REQUEST_ARTICLE_UPDATE);
    yield fork(udpateArticle, action.payload);
  }
}

export default function* rootSaga() {
  yield fork(watchFetchArticleList);
  yield fork(watchFetchArticleById);
  yield fork(watchArticleCreate);
  yield fork(watchArticleUpdate);
}