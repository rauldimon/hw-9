import { getType } from "typesafe-actions";
import * as actions from "./actions";
import { GameState, GameAction } from "./types";

const randomNumber = (min: number, max: number): number =>
  Math.floor(min + Math.random() * (max + 1 - min));

const initialState: GameState = {
  selectValue: randomNumber(1, 3)
};

export default (state: GameState = initialState,action: GameAction) => {
  switch (action.type) {
    case getType(actions.setNumberValueAction):
      return { ...state, selectValue: randomNumber(1, 3) };
    default:
      return state;
  }
};


