import { actionType } from '../types';
import { REQUEST_LOGIN, SUCCESS_LOGIN } from '../actions/userAction';
import { setAuthInfo, getAuthInfo } from '../utils';

console.log(getAuthInfo);
const initialState = {
  fetching: false,
  // ...(getAuthInfo() || {}),
};

const reducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        fetching: true,
      };
    case SUCCESS_LOGIN:
      const {
        data: { code, data },
      } = action.data;
      if (code === 200) {
        setAuthInfo(data);
        return {
          ...state,
          ...data,
          fetching: false,
        };
      }
      return {
        ...state,
      };
      break;
    default:
      return state;
  }
};

export default reducer;
