import * as React from 'react';
import * as moment from 'moment';
import { BackTop } from 'antd';

import RenderMarked from './renderMarked';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Article } from '../../types';
import { requestArticleById } from '../../actions/articleAction';
import { isApp } from '../../utils';
import ReactDisqus from '../common/disqus';
import * as Style from './style.scss';

interface Idetail extends RouteComponentProps<any, any> {
  article: Article;
  dispatch: any;
}

const mapStateToProps = (state: any, props: Idetail) => {
  return {
    article: state.articles.all[props.match.params['id']],
    // article: null,
  };
};

@connect(mapStateToProps)
class Detail extends React.Component<Idetail> {
  componentDidMount() {
    if (!this.props.article) {
      const id = this.props.match.params['id'];
      this.props.dispatch(requestArticleById(`/article/${id}`));
    }
  }

  render() {
    if (!this.props.article) {
      return null;
    }

    const {
      attributes: { markdowncontent, title, createTime },
      id,
    } = this.props.article;

    return (
      <div className={Style.detailContainer}>
        <div className={Style.detail}>
          <header>
            <h1>{title}</h1>
            <div className="optioninfo">
              <div className="createTime">
                {moment
                  .unix(parseInt(createTime))
                  .format('YYYY年MM月DD日 hh:mm:ss')}
              </div>
              {isApp() ? (
                <Link to={`/article/edit/${id}`}>编辑</Link>
              ) : (
                <span />
              )}
            </div>
            <hr />
          </header>
          <RenderMarked markdowncontent={markdowncontent} />
          <div className={Style.disqusContainer}>
            <ReactDisqus
              shortname="abelce"
              url={`//blog.tangzhengxiong.com/article/${id}`}
              identifier={id}
            />
          </div>
          <BackTop>
            <div className="ant-back-top-inner">UP</div>
          </BackTop>
        </div>
      </div>
    );
  }
}

export default withRouter(Detail);
