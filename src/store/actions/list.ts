import * as actionTypes from "./actionTypes";
import { Todo } from "../../types/types";

const fetchTodosList = (userId: string) => ({
  type: actionTypes.FETCH_TODOS_LIST,
  userId
});

const fetchListSuccess = (list: Todo[]) => ({
  type: actionTypes.FETCH_LIST_SUCCESS,
  list
});

const failedRequest = (errorMessage: string) => ({
  type: actionTypes.FAILED_REQUEST,
  errorMessage
});

const deleteItem = (id: number) => ({
  type: actionTypes.DELETE_ITEM,
  id
});

const deleteItemSuccess = (id: number) => ({
  type: actionTypes.DELETE_ITEM_SUCCESS,
  id
});

const changeItem = (item: Todo) => ({
  type: actionTypes.CHANGE_ITEM,
  item
});

const changeItemSuccess = (item: Todo) => ({
  type: actionTypes.CHANGE_ITEM_SUCCESS,
  item
});

const addItem = (item: Todo) => ({
  type: actionTypes.ADD_ITEM,
  item
});

const addItemSuccess = (item: Todo) => ({
  type: actionTypes.ADD_ITEM_SUCCESS,
  item
});

const setListLoadingStatus = (listLoading: boolean) => ({
  type: actionTypes.SET_LIST_LOADING_STATUS,
  listLoading
});

export {
  fetchTodosList,
  fetchListSuccess,
  failedRequest,
  deleteItem,
  deleteItemSuccess,
  changeItem,
  changeItemSuccess,
  addItem,
  addItemSuccess,
  setListLoadingStatus
};
