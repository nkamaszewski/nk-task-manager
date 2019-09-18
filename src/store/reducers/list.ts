import * as actionTypes from "../actions/actionTypes";

const initialState = {
  list: []
};

const setUser = (state: any) => ({ ...state });

const reducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case actionTypes.GET_USER:
      return setUser(state);
    default:
      return state;
  }
};

export default reducer;
