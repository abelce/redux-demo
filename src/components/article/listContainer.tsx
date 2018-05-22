import * as React from 'react';
import Item from './item';
import { article } from '../../types'
import { connect } from 'react-redux';
import { getArticleList } from '../../actions/articleAction';

const mapStateToProps = (state: any) => {
  return {
    articles: state.articles
  }
}
const mapDispatchToProps = (dispatch: any) => {
  const a = getArticleList();
  console.log(a);
  return {
    getArticle: dispatch(getArticleList()),
  }
}

interface IlistCOntiner {
  articles: Array<article>;
  getArticle: Function;
}

@connect(mapStateToProps, mapDispatchToProps)
class ListContainer extends React.Component<IlistCOntiner> {

  render () {
    return (
      <div>
        {this.props.articles.map(article => <Item article={article}/>)}
      </div>
    )
  }
}

export default ListContainer;