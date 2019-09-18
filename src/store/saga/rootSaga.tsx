import { getListSaga } from "./sagas";
import { all } from "@redux-saga/core/effects";

export function* rootSaga() {
  yield all([getListSaga()]);
}
