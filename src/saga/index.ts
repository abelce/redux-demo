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
  REQUEST_ARTICLE_DELETE,
  SUCCESS_ARTICLE_DELETE,
  REQUEST_FILE_LIST,
  SUCCESS_FILE_LIST,
} from '../actions/articleAction';
import {
  REQUEST_IMAGR_CREATE,
  SUCCESS_IMAGR_CREATE,
  REQUEST_IMAGR_LIST,
  SUCCESS_IMAGR_LIST,
} from '../actions/imageAction';
import { REQUEST_LOGIN, SUCCESS_LOGIN } from '../actions/userAction';

import { Article, User } from '../types';

const AxiosInstance = axios.create({
  baseURL: 'http://111.231.192.70:9001',
  // baseURL: 'http://127.0.0.1:9001',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'Content-Type': 'application/json;charset=utf-8',
  },
});

const AxiosInstance_file = axios.create({
  baseURL: 'http://111.231.192.70:9010',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'Content-Type': 'application/json;charset=utf-8',
  },
});

const AxiosInstance_image = axios.create({
  baseURL: 'http://111.231.192.70:9012',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'Content-Type': 'application/json;charset=utf-8',
  },
});

const AxiosInstance_api = axios.create({
  baseURL: 'http://api.tangzhengxiong.com/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'Content-Type': 'application/json;charset=utf-8',
  },
});

const buildArticleData = (article: Article) => {
  article.description = article.markdowncontent.substr(0, 200);
  article.tags = article.tags.join(',');
  return article;
};

function* fetchFileList({ url, params }: any) {
  const response = yield call(AxiosInstance_file.get, url, { params });
  yield put({ type: SUCCESS_FILE_LIST, data: response });
}

function* fetchArtices(url: string) {
  const response = yield call(AxiosInstance.get, url);
  yield put({ type: SUCCESS_ARTICLE_LIST, data: response });
}

function* fetchArticeByID(url: string) {
  const response = yield call(AxiosInstance.get, url);
  yield put({ type: SUCCESS_ARTICLE_BY_ID, data: response });
}

function* createArticle({ url, article, onSuccess }: any) {
  const response = yield call(
    AxiosInstance.post,
    url,
    buildArticleData(article)
  );
  yield put({ type: SUCCESS_ARTICLE_CREATE, data: response });
  onSuccess();
}

function* udpateArticle({ url, article, onSuccess }: any) {
  const response = yield call(
    AxiosInstance.put,
    url,
    buildArticleData(article)
  );
  yield put({ type: SUCCESS_ARTICLE_DELETE, data: response, article });
  onSuccess();
}

function* deleteArticle(url: string) {
  const response = yield call(AxiosInstance.delete, url);
  yield put({ type: REQUEST_ARTICLE_LIST, payload: '/article/list' });
}

function* createImage({ url, params }: any) {
  const response = yield call(AxiosInstance_image.post, url, {
    url: params.url,
  });
  yield put({ type: SUCCESS_IMAGR_CREATE, data: response });
}

function* fetchImageList(url: string) {
  const response = yield call(AxiosInstance_image.get, url);
  yield put({ type: SUCCESS_IMAGR_LIST, data: response });
}

//user
function* fetchLogin({ url, params }: any) {
  const response = yield call(AxiosInstance_api.post, url, { ...params });
  yield put({ type: SUCCESS_LOGIN, data: response });
}

//watch
function* watchFetchArticleList() {
  while (true) {
    let action = yield take(REQUEST_ARTICLE_LIST);
    yield fork(fetchArtices, action.payload);
  }
}

function* watchFileList() {
  while (true) {
    let action = yield take(REQUEST_FILE_LIST);
    yield fork(fetchFileList, action.payload);
  }
}

function* watchFetchArticleById() {
  while (true) {
    let action = yield take(REQUEST_ARTICLE_BY_ID);
    yield fork(fetchArticeByID, action.payload);
  }
}

function* watchArticleCreate() {
  while (true) {
    let action = yield take(REQUEST_ARTICLE_CREATE);
    yield fork(createArticle, action.payload);
  }
}

function* watchArticleUpdate() {
  while (true) {
    let action = yield take(REQUEST_ARTICLE_UPDATE);
    yield fork(udpateArticle, action.payload);
  }
}

function* watchArticleDelete() {
  while (true) {
    let action = yield take(REQUEST_ARTICLE_DELETE);
    yield fork(deleteArticle, action.payload);
  }
}

function* watchImageCreate() {
  while (true) {
    let action = yield take(REQUEST_IMAGR_CREATE);
    yield fork(createImage, action.payload);
  }
}

function* watchImageList() {
  while (true) {
    let action = yield take(REQUEST_IMAGR_LIST);
    yield fork(fetchImageList, action.payload);
  }
}

//user
function* watchLogin() {
  while (true) {
    let action = yield take(REQUEST_LOGIN);
    yield fork(fetchLogin, action.payload);
  }
}

export default function* rootSaga() {
  yield fork(watchFetchArticleList);
  yield fork(watchFetchArticleById);
  yield fork(watchArticleCreate);
  yield fork(watchArticleUpdate);
  yield fork(watchFileList);
  yield fork(watchImageCreate);
  yield fork(watchImageList);
  yield fork(watchArticleDelete);
  //user
  yield fork(watchLogin);
}
