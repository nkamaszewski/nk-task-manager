import * as actionTypes from "../actions/actionTypes";

const initialState = {
  list: []
};

const getTodosList = (state: any, { list }: any) => ({ ...state, list });

const reducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case actionTypes.FETCH_LIST_SUCCESS:
      return getTodosList(state, action as any);
    default:
      return state;
  }
};

export default reducer;
