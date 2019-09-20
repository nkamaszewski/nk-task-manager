import {
  failedRequest,
  changeItemSuccess,
  setListLoadingStatus
} from "../../actions/list";
import * as actionTypes from "../../actions//actionTypes";
import { put, takeEvery } from "@redux-saga/core/effects";
import { DEFAULT_ERROR_MESSAGE } from "../../../helpers/constans";

function* changeItem(action: any) {
  yield put(setListLoadingStatus(true));
  try {
    // cause jsonplaceholder API is fake, when new added item will be trying to change,
    // on server will be send fake item's id (id that not real exist in jsonplaceholder),
    // and then always error will be occured.
    // In real api code below will be executed

    // const response = yield call(fetch, `${API_ENDPOINT}/${action.item.id}`, {
    //   method: "PUT",
    //   body: JSON.stringify(action.item),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8"
    //   }
    // });
    // const data = yield response.json();
    yield put(changeItemSuccess(action.item));
  } catch (e) {
    yield put(failedRequest(DEFAULT_ERROR_MESSAGE));
  }
}

export function* changeItemSaga() {
  yield takeEvery(actionTypes.CHANGE_ITEM, changeItem);
}
