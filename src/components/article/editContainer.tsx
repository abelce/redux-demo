import * as _ from 'lodash';
import * as React from 'react';
import {
  Input,
  Button,
  Form,
} from 'antd'
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import RenderMarked from './renderMarked';
import { requestArticleById, requestArticleCreate, requestArticleUpdate } from '../../actions/articleAction';
import * as style from './style.scss';
import Modals from '../common/modals';
import OptionsModal from './optionsModal';
import Edit from './edit';

const mapStateToProps = (state: any, props: any) => {
  return {
    article: state.articles.all[props.match.params["id"]]
  }
}

@connect(mapStateToProps)
@withRouter
class EditContainer extends React.Component {
  state = {
    article: null,
    // article: {
    //   markdowncontent: ''
    // }
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
    // if (this.props.match.params['id'] !== 'new' && !this.props.article) {
    this.setState({
      article: nextProps.article,
    })
    // }
  }

  handleMarkdownChange = (e: any) => {
    const { article } = this.state;
    _.set(article, 'markdowncontent', e.target.value);
    this.setState({
      article
    });
  }

  handleSave = (form) => {
    this.handleShowOptions(form);
  }

  handleTitleChange = (e: any) => {
    const { article } = this.state;
    
    _.set(article, 'title', e.target.value);
    this.setState({
      article
    })
  }

  handleShowOptions = (form) => {
    Modals.show(OptionsModal, {tags: this.props.article.tags.split(',')})
    .then(({tags}) => {
      form.validateFieldsAndScroll((err, formData) => {
        if (err) return;
        const article = {...this.props.article, ...formData, tags };
        this.props.match.params['id'] === 'new'
        ? this.props.dispatch(requestArticleCreate({url: '/article', article}))
        : this.props.dispatch(requestArticleUpdate({url: `/article/${this.props.match.params['id']}`, article}));
      })
    })
  }

  render() {
    const { article } = this.state;
    const props = {
      article: this.state.article,
      onShowOptions: this.handleShowOptions,
      onTitleChange: this.handleTitleChange,
      onSave: this.handleSave,
      onMarkdownChange: this.handleMarkdownChange,
    }
    
    if (!article) return null;

    return (
      <Edit {...props}/>
    )
  }
}

export default EditContainer;