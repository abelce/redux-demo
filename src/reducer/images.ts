import { actionType } from '../types';
import { Image } from '../types/index';

import { REQUEST_IMAGR_LIST, SUCCESS_IMAGR_LIST } from '../actions/imageAction';

const initialState = {
  fetching: false,
  ids: [],
  all: {},
};

function getImageList(state: any, { data }: any) {
  let { ids, all } = state;
  ids = [];
  data.data.forEach((img: Image) => {
    if (!ids.includes(img.id)) {
      ids.push(img.id);
    }
    all[img.id] = img;
  });
  return {
    ...state,
    ids,
    fetching: false,
  };
}

const images = (state = initialState, action: actionType) => {
  switch (action.type) {
    case REQUEST_IMAGR_LIST:
      return {
        ...state,
        fetching: true,
      };
      break;
    case SUCCESS_IMAGR_LIST:
      return getImageList(state, action.data);
      break;
    // case SUCCESS_ARTICLE_DELETE:
    //   break;
    default:
      return state;
  }
};

export default images;
