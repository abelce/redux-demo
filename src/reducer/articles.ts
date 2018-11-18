import { actionType } from '../types';
import { Article, Image } from '../types/index';
import {
  REQUEST_ARTICLE_LIST,
  SUCCESS_ARTICLE_LIST,
  REQUEST_ARTICLE_BY_ID,
  SUCCESS_ARTICLE_BY_ID,
  SUCCESS_ARTICLE_UPDATE,
} from '../actions/articleAction';

const initialState = {
  fetching: false,
  ids: [],
  all: {},
};

function getArticlesData(state: any, { data }: any) {
  let { ids, all } = state;
  ids = [];
  data.data.forEach((at: Article) => {
    if (!ids.includes(at.id)) {
      ids.push(at.id);
    }
    all[at.id] = at;
  });

  return {
    ...state,
    all,
    ids,
    fetching: false,
  };
}

function getArticle(state: any, { data: { data } }: any) {
  if (!data) {
    return state;
  }
  const { all } = state;
  all[data.id] = data;
  return {
    ...state,
    all,
  };
}

const articles = (state = initialState, action: actionType) => {
  let { all } = state;
  switch (action.type) {
    case REQUEST_ARTICLE_LIST:
      return {
        ...state,
        fetching: true,
      };
    case SUCCESS_ARTICLE_LIST:
      return getArticlesData(state, action.data);
      break;
    case REQUEST_ARTICLE_BY_ID:
      return {
        ...state,
        fetching: true,
      };
      break;
    case SUCCESS_ARTICLE_BY_ID:
      return getArticle(state, action.data);
      break;
    case SUCCESS_ARTICLE_UPDATE:
      const { article } = action;
      all[article.id] = article;
      return {
        ...state,
        all,
      };
      // case SUCCESS_FILE_LIST:
      //   const { data: {data, mate}} = action.data;
      //   files.list = data;
      //   files.total = mate.total;
      //   return {
      //     ...state,
      //     files,
      //   };
      break;
    default:
      return state;
  }
};

export default articles;
