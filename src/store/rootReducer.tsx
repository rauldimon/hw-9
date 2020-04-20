import { combineReducers } from "redux";
import gameReducer from "./gameReducer/reducers";
import { StateType } from "typesafe-actions";
import { GameAction } from "./gameReducer/types";

const rootReducers = combineReducers({
  game: gameReducer
});

export type IRootState = StateType<typeof rootReducers>;
export type IRootActions = GameAction;

export default rootReducers;
