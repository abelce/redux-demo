import * as React from 'react';
import RenderMarked from './renderMarked';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { article } from '../../types';
import { requestArticleById } from '../../actions/articleAction';

interface Idetail extends RouteComponentProps<any, any>{
  article: article;
  dispatch: any;
}

const mapStateToProps = (state: any, props: Idetail) => {
  return {
    article: state.articles.all[props.match.params["id"]],
    // article: null,
  }
};

@connect(mapStateToProps)
class Detail extends React.Component<Idetail> {

  componentDidMount() {
    if (!this.props.article) {
      const id = this.props.match.params["id"];
      this.props.dispatch(requestArticleById(`/article/${id}`));
    }
  }

  render() {
    if (!this.props.article) {
      return null;
    }

    return (
      <RenderMarked markdowncontent={this.props.article.markdowncontent}/>
    )
  }
}

export default withRouter(Detail);