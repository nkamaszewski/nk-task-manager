import * as actionTypes from "../actions/actionTypes";
import { deepCopy } from "../../helpers/deepCopy";
import { Todo } from "../../types/types";

const initialState = {
  list: []
};

const getTodosList = (state: any, { list }: any) => ({ ...state, list });

const deleteItem = (state: any, { id }: any) => {
  const newList = deepCopy(state.list).filter((item: Todo) => item.id !== id);
  console.log(newList);
  console.log(id);
  return { ...state, list: newList };
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_LIST_SUCCESS:
      return getTodosList(state, action as any);
    case actionTypes.DELETE_ITEM_SUCCESS:
      return deleteItem(state, action as any);
    default:
      return state;
  }
};

export default reducer;
