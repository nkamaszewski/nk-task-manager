import * as actionTypes from "../actions/actionTypes";
import { deepCopy } from "../../helpers/deepCopy";
import { Todo } from "../../types/types";

interface State {
  list: Todo[];
  listLoading: boolean;
  errorMessage: string;
}

const initialState: State = {
  list: [],
  listLoading: false,
  errorMessage: ""
};

const getTodosList = (state: any, { list }: any) => ({
  ...state,
  list,
  listLoading: false
});

const deleteItem = (state: any, { id }: any) => {
  const newList = deepCopy(state.list).filter((item: Todo) => item.id !== id);
  return { ...state, list: newList, listLoading: false };
};

const changeItem = (state: any, { item }: any) => {
  let newList = deepCopy(state.list);
  const index = newList.findIndex((todo: Todo) => todo.id === item.id);

  if (index !== -1) {
    newList[index] = item;
  }

  return { ...state, list: newList, listLoading: false };
};

const addItem = (state: any, { item }: any) => {
  const newList = deepCopy(state.list);
  newList.push(item);

  return { ...state, list: newList, listLoading: false };
};

const setListLoadingStatus = (state: any, { listLoading }: any) => ({
  ...state,
  listLoading
});

const setErrorMessage = (state: any, { errorMessage }: any) => ({
  ...state,
  listLoading: false,
  errorMessage
});

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_LIST_SUCCESS:
      return getTodosList(state, action as any);
    case actionTypes.DELETE_ITEM_SUCCESS:
      return deleteItem(state, action as any);
    case actionTypes.CHANGE_ITEM_SUCCESS:
      return changeItem(state, action as any);
    case actionTypes.ADD_ITEM_SUCCESS:
      return addItem(state, action as any);
    case actionTypes.SET_LIST_LOADING_STATUS:
      return setListLoadingStatus(state, action as any);
    case actionTypes.FAILED_REQUEST:
      return setErrorMessage(state, action as any);
    default:
      return state;
  }
};

export default reducer;
