import * as actionTypes from "./actionTypes";

const fetchTodosList = () => ({
  type: actionTypes.FETCH_TODOS_LIST
});
const fetchListSuccess = (list: any) => ({
  type: actionTypes.FETCH_LIST_SUCCESS,
  list
});
const fetchListFailed = (error: any) => ({
  type: actionTypes.FETCH_LIST_FAILED,
  error
});

export { fetchTodosList, fetchListSuccess, fetchListFailed };
