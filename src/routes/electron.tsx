import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import Artice from '../components/article';
import Modals from '../components/common/modals';
import * as style from './style.scss';

class Routes extends React.Component {
  render() {
    return (
      <Layout className={style.layout}>
        <Layout.Content className={style.content}>
          <Switch>
            <Route path="/article" component={Artice} />
            <Redirect exact from="/" to="/article" />
          </Switch>
        </Layout.Content>
        <Modals />
      </Layout>
    );
  }
}

export default Routes;
