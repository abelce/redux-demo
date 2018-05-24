import { actionType } from '../types'
import * as constants from '../constants';
//article

const initialState = {
  articles: [],
}

function getRequestData({ data }: any) {
  return data.data;
}

const reducer = (state = initialState, action: actionType) => {
  console.log(action)
  
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
    case constants.FETCH_ARTICLE_SUCCESS:
      
      return {
        articles: getRequestData(action.data),
      }
    default:
      return state;
  }
}

export default reducer;