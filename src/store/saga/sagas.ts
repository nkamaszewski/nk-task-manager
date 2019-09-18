import { takeEvery, put } from "@redux-saga/core/effects";
import * as actionTypes from "../actions//actionTypes";
import { fetchListSuccess, fetchListFailed } from "../actions/list";

export function* getList() {
  try {
    const response = yield fetch("https://jsonplaceholder.typicode.com/todos");
    const data = yield response.json();
    yield put(fetchListSuccess(data));
  } catch (e) {
    yield put(fetchListFailed(e));
  }
}

export function* getListSaga() {
  yield takeEvery(actionTypes.FETCH_TODOS_LIST, getList);
}
