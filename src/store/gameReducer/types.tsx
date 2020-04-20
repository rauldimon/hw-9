import * as actions from "./actions";
import { ActionType } from "typesafe-actions";

export type GameAction = ActionType<typeof actions>;

export type GameState = {selectValue: number;};
