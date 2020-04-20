import { take, put } from "redux-saga/effects";
import * as actions from "./actions";

export function* selectNumSaga() {
  while (true) {
    const { payload: { player, selectValue}} = yield take(actions.selectValueAction);
    if (player === selectValue) {
      console.log("ok");
      yield put(actions.setNumberValueAction());
    } else {
      console.error("Error");
    }
  }
}
