// import { actionType } from '../types'
// import { Article, Image } from '../types/index';
// import {
//   REQUEST_ARTICLE_LIST,
//   SUCCESS_ARTICLE_LIST,
//   REQUEST_ARTICLE_BY_ID,
//   SUCCESS_ARTICLE_BY_ID,
//   SUCCESS_ARTICLE_UPDATE,
//   SUCCESS_ARTICLE_DELETE,
//   SUCCESS_FILE_LIST,
//   REQUEST_FILE_LIST,
// } from '../actions/articleAction';

// import {
//   REQUEST_IMAGR_CREATE,
//   SUCCESS_IMAGR_CREATE,
//   REQUEST_IMAGR_LIST,
//   SUCCESS_IMAGR_LIST
// } from '../actions/imageAction';
// const initialState = {
//   articles: {
//     fetching: false,
//     ids: [],
//     all: {}
//   },
//   files: {
//     list: [],
//     total: 0,
//   },
//   images: {
//     fetching: false,
//     ids: [],
//     all: {}
//   }
// }

// function getArticlesData(state: any, { data }: any) {
//   const {articles} = state;
//   articles.ids = [];
//   data.data.forEach((at: Article) => {
//     if (!articles.ids.includes(at.id)) {
//       articles.ids.push(at.id)
//     }
//     articles.all[at.id] = at;
//   });
//   articles.fetching = false;

//   return {
//     ...state,
//     articles,
//   };
// }

// function getArticle (state: any, {data: {data}}: any) {
//   if (!data) {
//     return state;
//   }
//   const {articles} = state;
//   articles.all[data.id] = data;
//   return {
//     ...state,
//     articles,
//   };
// }

// function getImageList(state: any, { data }: any) {
//   let images = state.images;
//   images.ids = [];
//   data.data.forEach((img: Image) => {
//     if (!images.ids.includes(img.id)) {
//       images.ids.push(img.id)
//     }
//     images.all[img.id] = img;
//   });
//   images.fetching = false;
//   return {
//     ...state,
//     images,
//   };
// }

// const reducer = (state = initialState, action: actionType) => {
//   let { articles, files, images } = state;
//   switch (action.type) {
//     case REQUEST_ARTICLE_LIST:
//       articles.fetching = true;
//       return {
//         ...state,
//         articles,
//       };
//     case SUCCESS_ARTICLE_LIST:
//       return getArticlesData(state, action.data)
//       break;
//     case REQUEST_ARTICLE_BY_ID:
//       articles.fetching = true;
//       return {
//         ...state,
//         articles,
//       };
//       break;
//     case SUCCESS_ARTICLE_BY_ID:
//       return getArticle(state, action.data)
//       break;
//     case SUCCESS_ARTICLE_UPDATE:
//       const {article} = action;
//       // const { articles } = state;
//       articles.all[article.id] = article;
//       return {
//         ...state,
//         articles,
//       };
//     case SUCCESS_FILE_LIST:
//       const { data: {data, mate}} = action.data;
//       files.list = data;
//       files.total = mate.total;
//       return {
//         ...state,
//         files,
//       };
//       break;
//     case REQUEST_IMAGR_LIST:
//       images.fetching = true;
//       return {
//         ...state,
//         images
//       }
//       break;
//     case SUCCESS_IMAGR_LIST:
//       return getImageList(state, action.data);
//       break;
//     // case SUCCESS_ARTICLE_DELETE:
//     //   break;
//     default:
//       return state;
//   }
// }

// export default reducer;

import { combineReducers } from 'redux';
import user from './user';
import articles from './articles';
import images from './images';
import files from './files';

export default combineReducers({
  user,
  articles,
  images,
  files,
});
