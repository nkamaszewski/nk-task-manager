import { failedRequest, changeItemSuccess } from "../../actions/list";
import * as actionTypes from "../../actions//actionTypes";
import { put, takeEvery } from "@redux-saga/core/effects";

function* changeItem(action: any) {
  try {
    // cause jsonplaceholder API is fake, when new added item will be trying to change,
    // on server will be send fake item's id (id that not real exist in jsonplaceholder),
    // and then always error will be occured.
    // In real api code below will be executed

    // const response = yield fetch(
    //   `https://jsonplaceholder.typicode.com/todos/${action.item.id}`,
    //   {
    //     method: "PUT",
    //     body: JSON.stringify(action.item),
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8"
    //     }
    //   }
    // );
    // const data = yield response.json();
    yield put(changeItemSuccess(action.item));
  } catch (e) {
    yield put(failedRequest(e));
  }
}

export function* changeItemSaga() {
  yield takeEvery(actionTypes.CHANGE_ITEM, changeItem);
}
