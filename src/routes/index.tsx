import * as React from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Layout } from 'antd'
import Homepage from '../components/homepage';
import Header from '../layout/header';
import Upload from '../components/upload';
import Artice from '../components/article';

class Routes extends React.Component {
  render() {
      return(
          <Layout style={{background: '#ffffff'}}>
            <Header/>
            <Layout.Content style={{padding: "0 32px"}}>
              <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/upload" component={Upload}/>
                <Route exact path="/article" component={Artice}/>
              </Switch>
            </Layout.Content>
          </Layout>
      )
  } 
}

export default Routes;