import { actionType } from '../types'
import * as constants from '../constants';
//article

const initialState = {
  articles: [],
}


const reducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case constants.GET_ARITICLE_LIST: 
      return {
        articles: [],
      }
      break;
    case constants.GET_ARTICLE_BY_ID:
      break;
    case constants.CREATE_ARTICLE:
      break;
    case constants.UPDATE_ARTICLE:
      break;
    default:
      return state;
  }
}

export default reducer;