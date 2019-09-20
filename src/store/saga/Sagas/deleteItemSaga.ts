import {
  deleteItemSuccess,
  failedRequest,
  setListLoadingStatus
} from "../../actions/list";
import * as actionTypes from "../../actions//actionTypes";
import { put, takeEvery, call } from "@redux-saga/core/effects";

function* deleteItem(action: any) {
  yield put(setListLoadingStatus(true));
  try {
    const response = yield call(
      fetch,
      `https://jsonplaceholder.typicode.com/todos/${action.id}`,
      {
        method: "DELETE"
      }
    );
    yield response.json();
    yield put(deleteItemSuccess(action.id));
  } catch (e) {
    yield put(failedRequest(e));
  }
}

export function* deleteItemSaga() {
  yield takeEvery(actionTypes.DELETE_ITEM, deleteItem);
}
