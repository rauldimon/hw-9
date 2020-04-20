import { createAction } from "typesafe-actions";

export const setNumberValueAction = createAction(
  "Game/SET_NUMBER_VALUE"
)();

export const selectValueAction = createAction(
  "Game/SELECT_VALUE",
  (player : number, selectValue: number) => ({ player, selectValue })
)();


