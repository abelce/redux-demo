import { call, take, put, fork } from 'redux-saga/effects';
import axios from 'axios';
import * as constants from '../constants';

const AxiosInstance = axios.create({
  baseURL: 'http://111.231.192.70:9001',

})

function* fetchArtice(url: string) {
  const response = yield call(AxiosInstance.get, url);
  put({type: constants.FETCH_ARTICLE_SUCCESS, data: response});
}

function* watchFetchRequest() {
  while(true) {
    const action = yield take(constants.GET_ARITICLE_LIST);
    yield fork(fetchArtice, action.payload);
  }
}

export default function* rootSaga() {
  yield watchFetchRequest();
}