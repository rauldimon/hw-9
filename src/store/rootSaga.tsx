import { all, spawn } from "redux-saga/effects";
import { selectNumSaga } from "./gameReducer/sagas";

export default function* rootSaga() {
  yield all([spawn(selectNumSaga)]);
}

