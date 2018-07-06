import * as _ from 'lodash';
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestArticleById, requestArticleCreate, requestArticleUpdate } from '../../actions/articleAction';
import Modals from '../common/modals';
import OptionsModal from './optionsModal';
import Edit from './edit';
import {Article} from '../../types';

import * as style from './style.scss';
import { WrappedFormUtils } from 'antd/lib/form/Form';

const mapStateToProps = (state: any, props: any) => {
  return {
    article: state.articles.all[props.match.params["id"]]
  }
}

interface IeditContainer {
  article: Article;
  match: any;
  history: any;
  dispatch: any;
}

interface Istate {

}

@withRouter
@connect(mapStateToProps)
class EditContainer extends React.Component<IeditContainer> {
  state = {
    article: null,
  }

  constructor(props: IeditContainer) {
    super(props)
    if (this.props.article) {
      this.state.article = this.props.article;
    }
    if (this.props.match.params['id'] === 'new') {
      this.state.article = {
        tags: '',
        title: '',
        markdowncontent: ''
      }
    }
  }

  componentDidMount() {
    if (this.props.match.params['id'] !== 'new' && !this.state.article) {
      this.props.dispatch(requestArticleById(`/article/${this.props.match.params['id']}`));
    }
  }

  componentWillReceiveProps(nextProps: IeditContainer) {
    this.setState({
      article: nextProps.article,
    })
  }

  onSuccess = () => {
    this.props.history.push('/article');
  }

  handleMarkdownChange = (e: any) => {
    const { article } = this.state;
    _.set(article, 'markdowncontent', e.target.value);
    this.setState({
      article
    });
  }

  handleSave = (form: WrappedFormUtils) => {
    this.handleShowOptions(form);
  }

  handleTitleChange = (e: any) => {
    const { article } = this.state;
    
    _.set(article, 'title', e.target.value);
    this.setState({
      article
    })
  }

  handleShowOptions = (form: WrappedFormUtils) => {
    Modals.show(OptionsModal, {tags: this.state.article.tags.split(',')})
    .then(({tags}) => {
      form.validateFieldsAndScroll((err: any, formData: any) => {
        if (err) return;
        const article = {...this.props.article, ...formData, tags };
        this.props.match.params['id'] === 'new'
        ? this.props.dispatch(requestArticleCreate({url: '/article', article, onSuccess: this.onSuccess}))
        : this.props.dispatch(requestArticleUpdate({url: `/article/${this.props.match.params['id']}`, article, onSuccess: this.onSuccess}));
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