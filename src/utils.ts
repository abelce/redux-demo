import * as Store from 'store';
import * as _ from 'lodash';
import * as moment from 'moment';

export const types = [{
  id: '1',
  value: 'front',
  label: '前端',
}, {
  id: '2',
  value: 'backend',
  label: '后端',
},
]

export const tags = [
  {
    id: '1',
    value: 'javascript',
    label: 'javascript',
  }, {
    id: '2',
    value: 'react',
    label: 'react',
  }, {
    id: '3',
    value: 'flux',
    label: 'flux',
  }, {
    id: '4',
    value: 'redux',
    label: 'redux',
  }, {
    id: '5',
    value: 'golang',
    label: 'golang',
  },
]

export const LanguageMap = new Map([
  ['zh', 'zh-CN'],
  ['en', 'en-US']
]);

export const getLanguageCode = () => {
  if (!Store.get('languageCode')) {
    Store.set('languageCode', LanguageMap[navigator.language] || LanguageMap['zh']);
  }
  return Store.get('languageCode');
}

export const setLanguageCode = (code: string) => {
  if (!_.isEqual(Store.get('languageCode'), code)) {
    Store.set('languageCode', code);
    setMomentLocale(code);
  }
}

export const setMomentLocale = (code: string) => {
  let momentLocaleMap = {'zh-CN': 'zh', 'en-US': 'en'};
  moment.locale(momentLocaleMap[code] || momentLocaleMap['zh-CN']);
}

// const messageMap = new Map([['zh-CN', zh_CN], ['en-US', en_US]]);
const messageMap = new Map();

function transfromLanguageJson(messageJson: object) {
  let json = {};
  for (let key in messageJson) {
    if (!key) {
      continue;
    }
    json[key] = messageJson[key];
  }
  return json;
}

export const getMessages = () => {
  return transfromLanguageJson(messageMap[getLanguageCode()]);
}

