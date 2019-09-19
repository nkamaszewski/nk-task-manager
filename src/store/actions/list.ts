import * as actionTypes from "./actionTypes";
import { Todo } from "../../types/types";

const fetchTodosList = () => ({
  type: actionTypes.FETCH_TODOS_LIST
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

export {
  fetchTodosList,
  fetchListSuccess,
  failedRequest,
  deleteItem,
  deleteItemSuccess,
  changeItem,
  changeItemSuccess
};
