import { Injectable } from "@angular/core";
import { loadGames, loadGamesSuccess } from "./game.actions";
import { mergeMap } from "rxjs";

@Injectable()
export class GameEffects {
  constructor(
    private actions$: Actions,
    private gameRepository: GameMockRepository
  ) {}

  loadGames$ = createEffect(() => this.actions$.pipe(
    ofType(loadGames),
    mergeMap(() => this.gameRepository.getAll()
      .then(games => loadGamesSuccess({ games }))
    )
  ));
}
