import * as React from 'react';
import Item from './item';
import { Modal, BackTop } from 'antd';
import { Article } from '../../types';
import { connect, DispatchProp } from 'react-redux';
import {
  requestArticleList,
  requestArticleDelete,
} from '../../actions/articleAction';
import * as style from './style.scss';

const mapStateToProps = (state: any) => {
  // console.log()
  return {
    articles: state.articles.ids.map((id: string) => state.articles.all[id]),
  };
};
// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     getArticle: dispatch(getArticleList()),
//   }
// }

interface IlistContiner extends DispatchProp<object> {
  articles: Array<Article>;
  getArticle: Function;
}

@connect(mapStateToProps)
class ListContainer extends React.Component {
  componentDidMount() {
    this.queryArticles();
  }

  queryArticles = () => {
    this.props.dispatch(requestArticleList('/article/list'));
  };

  handleDelete = (id: string) => {
    Modal.confirm({
      title: '提示',
      content: '确定删除',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        this.props.dispatch(requestArticleDelete(`/article/${id}`));
      },
    });
  };

  render() {
    const { articles } = this.props;
    if (!articles || (Array.isArray(articles) && articles.length === 0)) {
      return null;
    }
    return (
      <div className={style.listContainer}>
        {this.props.articles.map(article => (
          <Item
            key={article.id}
            article={article}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default ListContainer;
