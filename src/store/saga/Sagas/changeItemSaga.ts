import { failedRequest, changeItemSuccess } from "../../actions/list";
import * as actionTypes from "../../actions//actionTypes";
import { put, takeEvery } from "@redux-saga/core/effects";

function* changeItem(action: any) {
  try {
    const response = yield fetch(
      `https://jsonplaceholder.typicode.com/todos/${action.item.id}`,
      {
        method: "PUT",
        body: JSON.stringify(action.item),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }
    );
    const data = yield response.json();
    yield put(changeItemSuccess(data));
  } catch (e) {
    yield put(failedRequest(e));
  }
}

export function* changeItemSaga() {
  yield takeEvery(actionTypes.CHANGE_ITEM, changeItem);
}
