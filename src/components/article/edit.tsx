import * as _ from 'lodash';
import * as React from 'react';
import {
  Input,
  Button,
} from 'antd'
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import RenderMarked from './renderMarked';
import { requestArticleById, requestArticleCreate, requestArticleUpdate } from '../../actions/articleAction';
import * as style from './style.scss';

const mapStateToProps = (state: any, props: any) => {
  return {
    article: state.articles.all[props.match.params["id"]]
  }
}

@connect(mapStateToProps)
class Edit extends React.Component {
  state = {
    article: {
      markdowncontent: ''
    }
  }

  constructor(props: any) {
    super(props)
    if (this.props.article) {
      this.state.article = this.props.article;
    } 
  }

  componentDidMount() {
    if (this.props.match.params['id'] !== 'new') {
      this.props.dispatch(requestArticleById(`/article/${this.props.match.params['id']}`));
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params['id'] !== 'new' && !this.props.article) {
      this.setState({
        article: nextProps.article,
      })
    }
  }

  handleMarkdownChange = (e: any) => {
    const { article } = this.state;
    _.set(article, 'markdowncontent', e.target.value);
    this.setState({
      article
    });
  }

  handleSave = () => {
    const {article} = this.state;
    article.description = article.markdowncontent.substr(0, 200);    
    this.props.match.params['id'] === 'new'
    ? this.props.dispatch(requestArticleCreate({url: '/article', article}))
    : this.props.dispatch(requestArticleUpdate({url: `/article/${this.props.match.params['id']}`, article}));
  }

  handleTitleChange = (e: any) => {
    const { article } = this.state;
    
    _.set(article, 'title', e.target.value);
    this.setState({
      article
    })
  }

  render() {
    const { article: {title, markdowncontent}} = this.state;
    return (
      <div className={style.edit}>
        <header>
          <div className="header">
            <Input placeholder="请输入标题" value={title} onChange={this.handleTitleChange}/>
            <Button onClick={this.handleSave}>保存</Button>
          </div>
        </header>
        <div className="content">
          <div className="editor">
            <Input.TextArea value={markdowncontent} onChange={this.handleMarkdownChange}/>
          </div>
          <div className="preview">
            <RenderMarked markdowncontent={markdowncontent}/>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Edit);