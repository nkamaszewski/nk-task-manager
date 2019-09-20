import {
  failedRequest,
  addItemSuccess,
  setListLoadingStatus
} from "../../actions/list";
import * as actionTypes from "../../actions//actionTypes";
import { put, takeEvery, call } from "@redux-saga/core/effects";
import { DEFAULT_ERROR_MESSAGE, API_ENDPOINT } from "../../../helpers/constans";

function* addItem(action: any) {
  yield put(setListLoadingStatus(true));
  try {
    const response = yield call(fetch, API_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(action.item),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
    const data = yield response.json();
    yield put(addItemSuccess(data));
  } catch (e) {
    yield put(failedRequest(DEFAULT_ERROR_MESSAGE));
  }
}

export function* addItemSaga() {
  yield takeEvery(actionTypes.ADD_ITEM, addItem);
}
