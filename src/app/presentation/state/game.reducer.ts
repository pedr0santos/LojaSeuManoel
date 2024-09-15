import { createReducer, on } from "@ngrx/store";
import { Game } from "../../core/domain/entities/game.entity";
import { addGame, loadGamesSuccess } from "./game.actions";

export const initialState: Game[] = [];

const _gameReducer = createReducer(
  initialState,
  on(addGame, (state, { game }) => [...state, game]),
  on(loadGamesSuccess, (state, { games }) => [...games])
);

export function gameReducer(state: any, action: any) {
  return _gameReducer(state, action);
}
