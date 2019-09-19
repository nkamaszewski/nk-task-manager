import { all } from "@redux-saga/core/effects";
import { getListSaga } from "./Sagas/getListSaga";
import { deleteItemSaga } from "./Sagas/deleteItemSaga";
import { changeItemSaga } from "./Sagas/changeItemSaga";
import { addItemSaga } from "./Sagas/addItemSaga";

export function* rootSaga() {
  yield all([getListSaga(), deleteItemSaga(), changeItemSaga(), addItemSaga()]);
}
