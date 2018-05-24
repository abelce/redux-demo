import * as React from 'react';
import Item from './item';
import { article } from '../../types'
import { connect } from 'react-redux';
import { getArticleList } from '../../actions/articleAction';
import * as style from './style.scss';

const mapStateToProps = (state: any) => {
  return {
    articles: state.articles
  }
}
const mapDispatchToProps = (dispatch: any) => {
  return {
    getArticle: dispatch(getArticleList()),
  }
}

interface IlistCOntiner {
  articles: Array<article>;
  getArticle: Function;
  dispatch: any;
}

@connect(mapStateToProps)
class ListContainer extends React.Component<IlistCOntiner> {

  componentDidMount() {
    this.queryArticles();
  }

  queryArticles = () => {
    this.props.dispatch(getArticleList('/article/list'));
  }

  render () {
    console.log(this.props.articles)
    return (
      <div className={style.listContainer}>
        {this.props.articles.map(article => <Item key={article.id} article={article}/>)}
      </div>
    )
  }
}

export default ListContainer;