import * as React from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Layout } from 'antd'
import Homepage from '../components/homepage';
import Header from '../layout/header';

class Routes extends React.Component {
  render() {
      return(
          <Layout>
            <Header/>
            <Layout.Content style={{padding: "0 32px"}}>
              <Switch>
                <Route exact path="/" component={Homepage}/>
              </Switch>
            </Layout.Content>
          </Layout>
      )
  } 
}

export default Routes;