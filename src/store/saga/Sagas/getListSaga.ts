import { put, takeEvery, call } from "@redux-saga/core/effects";
import * as actionTypes from "../../actions//actionTypes";
import {
  fetchListSuccess,
  failedRequest,
  setListLoadingStatus
} from "../../actions/list";
import { DEFAULT_ERROR_MESSAGE, API_ENDPOINT } from "../../../helpers/constans";

function* getList(action: any) {
  yield put(setListLoadingStatus(true));
  try {
    const response = yield call(
      fetch,
      `${API_ENDPOINT}?userId=${action.userId}`
    );
    const data = yield response.json();
    const slicedData = data.slice(0, 10);
    yield put(fetchListSuccess(slicedData));
  } catch (e) {
    yield put(failedRequest(DEFAULT_ERROR_MESSAGE));
  }
}

export function* getListSaga() {
  yield takeEvery(actionTypes.FETCH_TODOS_LIST, getList);
}
