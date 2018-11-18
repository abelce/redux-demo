import { actionType } from '../types';
import { SUCCESS_FILE_LIST, REQUEST_FILE_LIST } from '../actions/fileAction';

const initialState = {
  fetching: false,
  list: [],
  total: {},
};
const files = (state = initialState, action: actionType) => {
  let { list, total } = state;
  switch (action.type) {
    case SUCCESS_FILE_LIST:
      const {
        data: { data, mate },
      } = action.data;
      list = data;
      total = mate.total;
      return {
        ...state,
        list,
        total,
      };
      break;
    default:
      return state;
  }
};

export default files;
