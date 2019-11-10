import * as actionTypes from "../actions/actionTypes";
import { Todo, State } from "../../types/types";

const initialState: State = {
  list: [],
  listLoading: false,
  errorMessage: ""
};

const getTodosList = (state: State, { list }: { list: Todo[] }) => ({
  ...state,
  list,
  listLoading: false,
  errorMessage: ""
});

const deleteItem = (state: State, { id }: { id: number }) => {
  const newList = state.list.filter((item: Todo) => item.id !== id);
  return { ...state, list: newList, listLoading: false, errorMessage: "" };
};

const changeItem = (state: State, { item }: { item: Todo }) => {
  let newList = [...state.list];
  const index = newList.findIndex((todo: Todo) => todo.id === item.id);

  if (index !== -1) {
    newList[index] = item;
  }

  return { ...state, list: newList, listLoading: false, errorMessage: "" };
};

const addItem = (state: State, { item }: { item: Todo }) => {
  const newList = [...state.list];
  newList.push(item);

  return { ...state, list: newList, listLoading: false, errorMessage: "" };
};

const setListLoadingStatus = (
  state: State,
  { listLoading }: { listLoading: boolean }
) => ({
  ...state,
  listLoading,
  errorMessage: ""
});

const setErrorMessage = (
  state: State,
  { errorMessage }: { errorMessage: string }
) => ({
  ...state,
  listLoading: false,
  errorMessage
});

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_LIST_SUCCESS:
      return getTodosList(state, action);
    case actionTypes.DELETE_ITEM_SUCCESS:
      return deleteItem(state, action);
    case actionTypes.CHANGE_ITEM_SUCCESS:
      return changeItem(state, action);
    case actionTypes.ADD_ITEM_SUCCESS:
      return addItem(state, action);
    case actionTypes.SET_LIST_LOADING_STATUS:
      return setListLoadingStatus(state, action);
    case actionTypes.FAILED_REQUEST:
      return setErrorMessage(state, action);
    default:
      return state;
  }
};

export default reducer;
