import { all } from "@redux-saga/core/effects";
import { getListSaga } from "./Sagas/getListSaga";
import { deleteItemSaga } from "./Sagas/deleteItemSaga";
import { changeItemSaga } from "./Sagas/changeItemSaga";

export function* rootSaga() {
  yield all([getListSaga(), deleteItemSaga(), changeItemSaga()]);
}
