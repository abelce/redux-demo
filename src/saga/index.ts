import { call, take, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import * as constants from '../constants';
import {
  REQUEST_ARTICLE_LIST,
  SUCCESS_ARTICLE_LIST,
  REQUEST_ARTICLE_BY_ID,
  SUCCESS_ARTICLE_BY_ID,

} from '../actions/articleAction';

const AxiosInstance = axios.create({
  baseURL: 'http://111.231.192.70:9001',
});

function* fetchArtices(url: string) {
  const response = yield call(AxiosInstance.get, url);
  yield put({type: SUCCESS_ARTICLE_LIST, data: response});
}

function* fetchArticeByID(url: string) {
  const response = yield call(AxiosInstance.get, url);
  yield put({type: SUCCESS_ARTICLE_BY_ID, data: response});
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

export default function* rootSaga() {
  yield fork(watchFetchArticleList);
  yield fork(watchFetchArticleById);
}