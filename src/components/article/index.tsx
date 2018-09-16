import * as React from 'react';
import { Link } from 'react-router-dom';
import ListContainer from './listContainer'
import * as Style from './style.scss';

class Article extends React.Component {

  render () {
    return (
      <div>
        <header className={Style["new"]}>
          <Link to="/article/edit/new">写博客</Link>
        </header>
        <ListContainer/>
      </div>
    )
  }
}

export default Article;