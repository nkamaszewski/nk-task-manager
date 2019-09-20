import {
  deleteItemSuccess,
  failedRequest,
  setListLoadingStatus
} from "../../actions/list";
import * as actionTypes from "../../actions//actionTypes";
import { put, takeEvery, call } from "@redux-saga/core/effects";
import { DEFAULT_ERROR_MESSAGE, API_ENDPOINT } from "../../../helpers/constans";

function* deleteItem(action: any) {
  yield put(setListLoadingStatus(true));
  try {
    const response = yield call(fetch, `${API_ENDPOINT}/${action.id}`, {
      method: "DELETE"
    });
    yield response.json();
    yield put(deleteItemSuccess(action.id));
  } catch (e) {
    yield put(failedRequest(DEFAULT_ERROR_MESSAGE));
  }
}

export function* deleteItemSaga() {
  yield takeEvery(actionTypes.DELETE_ITEM, deleteItem);
}
