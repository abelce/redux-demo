import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
// import Homepage from '../components/homepage';
// import Header from '../layout/header';
import Slider from '../layout/slider';
import Upload from '../components/upload';
import Artice from '../components/article';
import * as style from './style.scss';
import Modals from '../components/common/modals';
import Test from '../components/test';
import Image from '../components/image';
import Doodle from '../components/doodle';
import Login from '../components/login';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route>
          <Layout className={style.layout}>
            <Layout.Sider className={style.slider}>
              <Slider />
            </Layout.Sider>
            <Layout className={style.right}>
              <Layout.Content className={style.content}>
                <Switch>
                  <Route exact path="/" component={Artice} />
                  <Route path="/article" component={Artice} />
                  <Route exact path="/images" component={Image} />
                  <Route exact path="/upload" component={Upload} />
                  <Route exact path="/test" component={Test} />
                  <Route exact path="/doodle" component={Doodle} />
                </Switch>
              </Layout.Content>
            </Layout>
            <Modals />
          </Layout>
        </Route>
      </Switch>
    );
  }
}

export default Routes;
