import * as ReactDom from 'react-dom';
import * as React from 'react';
import 'moment-timezone';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes';
import './assets/style/index.scss';
// import './assets/plugins/editor/scss/editormd.scss';
import configureStore from './store';
import { IntlProvider, addLocaleData}  from 'react-intl';
import { LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import * as en from 'react-intl/locale-data/en';
import * as zh from 'react-intl/locale-data/zh';
// import { getLanguageCode, getMessages } from './utils';

window.__CHUNK = 'app';
const store = configureStore();
let antLocaleMap = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

addLocaleData([...en, ...zh]);
addLocaleData([{
  'locale': 'zh-CN', 
 }, {
   'locale': 'en-US',
 }])
//  let languageCode = getLanguageCode();

store.subscribe(() =>
  console.log(store.getState())
)

const render = () => {
  return (
    ReactDom.render(
          <Provider store={store}>
            <BrowserRouter>
              <Routes/>
            </BrowserRouter>
          </Provider>,
      document.getElementById('app')
    )
  )
}

render();

{/* <LocaleProvider locale={antLocaleMap[languageCode]}>
  <IntlProvider 
    locale='zh-CN'
    messages={getMessages()}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </Provider>
  </IntlProvider>
</LocaleProvider> */}