import { takeEvery, put } from "@redux-saga/core/effects";
import * as actionTypes from "../actions//actionTypes";
import {
  fetchListSuccess,
  failedRequest,
  deleteItemSuccess
} from "../actions/list";

export function* getList() {
  try {
    const response = yield fetch("https://jsonplaceholder.typicode.com/todos");
    const data = yield response.json();
    const slicedData = data.slice(0, 10);
    yield put(fetchListSuccess(slicedData));
  } catch (e) {
    yield put(failedRequest(e));
  }
}

export function* getListSaga() {
  yield takeEvery(actionTypes.FETCH_TODOS_LIST, getList);
}

export function* deleteItem(action: any) {
  console.log("action", action);
  try {
    const response = yield fetch(
      `https://jsonplaceholder.typicode.com/todos/${action.id}`,
      {
        method: "DELETE"
      }
    );
    const data = yield response.json();
    console.log("fet", data);

    yield put(deleteItemSuccess(1));
  } catch (e) {
    yield put(failedRequest(e));
  }
}

export function* deleteItemSaga() {
  yield takeEvery(actionTypes.DELETE_ITEM, deleteItem);
}
