import * as React from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom';

import Header from './header';
import ListContainer from './listContainer';
import ArticleDetail from './detail';
import EditContainer from './editContainer';

import * as Style from './style.scss';

class Article extends React.Component<any> {
  render() {
    const { match } = this.props;
    return (
      <div className={Style.article}>
        <Header />
        <Switch>
          <Route exact path={`${match.url}`} component={ListContainer} />
          <Route exact path={`${match.url}/:id`} component={ArticleDetail} />
          <Route
            exact
            path={`${match.url}/edit/:id`}
            component={EditContainer}
          />
        </Switch>
      </div>
    );
  }
}

export default Article;
