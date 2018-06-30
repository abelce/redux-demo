import * as React from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Layout } from 'antd'
import Homepage from '../components/homepage';
import Header from '../layout/header';
import Upload from '../components/upload';
import Artice from '../components/article';
import ArticleDetail from '../components/article/detail';
import EditContainer from '../components/article/editContainer';
import * as style from './style.scss';
import Modals from '../components/common/modals';

class Routes extends React.Component {
  render() {
      return(
          <Layout className={style.layout}>
            <Header/>
            <Layout.Content className={style.content}>
              <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/upload" component={Upload}/>
                <Route exact path="/article" component={Artice}/>
                <Route exact path="/article/:id" component={ArticleDetail}/>
                <Route exact path="/article/edit" component={EditContainer}/>                
                <Route exact path="/article/edit/:id" component={EditContainer}/>                
              </Switch>
            </Layout.Content>
            <Modals/>                            
          </Layout>
      )
  } 
}

export default Routes;