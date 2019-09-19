import { takeEvery, put } from "@redux-saga/core/effects";
import * as actionTypes from "../actions//actionTypes";
import { fetchListSuccess, fetchListFailed } from "../actions/list";

export function* getList() {
  try {
    const response = yield fetch("https://jsonplaceholder.typicode.com/todos");
    const data = yield response.json();

    const slicedData = data.slice(0, 10);

    yield put(fetchListSuccess(slicedData));
  } catch (e) {
    yield put(fetchListFailed(e));
  }
}

export function* getListSaga() {
  yield takeEvery(actionTypes.FETCH_TODOS_LIST, getList);
}
