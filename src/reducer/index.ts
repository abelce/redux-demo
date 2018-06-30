import { actionType } from '../types'
import { Article } from '../types/index';
import {
  REQUEST_ARTICLE_LIST,
  SUCCESS_ARTICLE_LIST,
  REQUEST_ARTICLE_BY_ID,
  SUCCESS_ARTICLE_BY_ID,
  SUCCESS_ARTICLE_UPDATE,
} from '../actions/articleAction';

const initialState = {
  articles: {
    fetching: false,
    ids: [],
    all: {}
  }
}

function getArticlesData(state: any, { data }: any) {
  const {articles} = state;
  data.data.forEach((at: Article) => {
    if (!state.articles.ids.includes(at.id)) {
      articles.ids.push(at.id)
    }
    articles.all[at.id] = at;
  });
  articles.fetching = false;

  return {
    ...state,
    articles,
  };
}

function getArticle (state: any, {data: {data}}: any) {
  if (!data) {
    return state;
  }
  const {articles} = state;
  articles.all[data.id] = data;
  return {
    ...state,
    articles,
  };
}

const reducer = (state = initialState, action: actionType) => {
  const { articles } = state;
  switch (action.type) {
    case REQUEST_ARTICLE_LIST:
      articles.fetching = true;
      return {
        ...state,
        articles,
      };
    case SUCCESS_ARTICLE_LIST:
      return getArticlesData(state, action.data)
      break;
    case REQUEST_ARTICLE_BY_ID:
      articles.fetching = true;
      return {
        ...state,
        articles,
      };
      break;
    case SUCCESS_ARTICLE_BY_ID:
      return getArticle(state, action.data)
      break;
    case SUCCESS_ARTICLE_UPDATE:
      const {article} = action;
      state.articles.all[article.id] = article;
      return state
    default:
      return state;
  }
}

export default reducer;