import { actionType } from '../types'
import { Article } from '../types/index';
import {
  REQUEST_ARTICLE_LIST,
  SUCCESS_ARTICLE_LIST,
  REQUEST_ARTICLE_BY_ID,
  SUCCESS_ARTICLE_BY_ID,
  SUCCESS_ARTICLE_UPDATE,
  SUCCESS_FILE_LIST,
  REQUEST_FILE_LIST,
} from '../actions/articleAction';

const initialState = {
  articles: {
    fetching: false,
    ids: [],
    all: {}
  },
  files: {
    list: [],
    total: 0,
  },
}

function getArticlesData(state: any, { data }: any) {
  const {articles} = state;
  articles.ids = [];
  data.data.forEach((at: Article) => {
    if (!articles.ids.includes(at.id)) {
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
  let { articles, files } = state;
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
      // const { articles } = state;
      articles.all[article.id] = article;
      return {
        ...state,
        articles,
      };
    case SUCCESS_FILE_LIST:
      const { data: {data, mate}} = action.data;
      files.list = data;
      files.total = mate.total;
      return {
        ...state,
        files,
      };
      break;
    default:
      return state;
  }
}

export default reducer;