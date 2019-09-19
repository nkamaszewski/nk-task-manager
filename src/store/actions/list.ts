import * as actionTypes from "./actionTypes";
import { Todo } from "../../types/types";

const fetchTodosList = (userId: string) => ({
  type: actionTypes.FETCH_TODOS_LIST,
  userId
});

const fetchListSuccess = (list: any) => ({
  type: actionTypes.FETCH_LIST_SUCCESS,
  list
});

const failedRequest = (error: any) => ({
  type: actionTypes.FAILED_REQUEST,
  error
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

export {
  fetchTodosList,
  fetchListSuccess,
  failedRequest,
  deleteItem,
  deleteItemSuccess,
  changeItem,
  changeItemSuccess,
  addItem,
  addItemSuccess
};
