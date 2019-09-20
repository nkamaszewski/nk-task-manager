import {
  failedRequest,
  addItemSuccess,
  setListLoadingStatus
} from "../../actions/list";
import * as actionTypes from "../../actions//actionTypes";
import { put, takeEvery, call } from "@redux-saga/core/effects";

function* addItem(action: any) {
  yield put(setListLoadingStatus(true));
  try {
    const response = yield call(
      fetch,
      "https://jsonplaceholder.typicode.com/todos",
      {
        method: "POST",
        body: JSON.stringify(action.item),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    );
    const data = yield response.json();
    yield put(addItemSuccess(data));
  } catch (e) {
    yield put(failedRequest(e));
  }
}

export function* addItemSaga() {
  yield takeEvery(actionTypes.ADD_ITEM, addItem);
}
