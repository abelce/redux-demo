import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import Artice from '../components/article';
import ArticleDetail from '../components/article/detail';
import Modals from '../components/common/modals';

import * as style from './style.scss';

class Routes extends React.Component {
  render() {
    return (
      <Layout className={style.layout}>
        <Layout.Content className={style.content}>
          <Switch>
            <Route exact path="/" component={Artice} />
            <Route path="/article" component={Artice} />
          </Switch>
        </Layout.Content>
        <Modals />
      </Layout>
    );
  }
}

export default Routes;
