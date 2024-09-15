import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Inject, Injectable } from '@angular/core';
import { mergeMap, map, catchError, of } from 'rxjs';  // Importando map e catchError
import { loadGames, loadGamesSuccess,loadGamesFailure  } from './game.actions';
import { GameRepository } from '../../core/domain/repositories/game-repository.interface';
import { Game } from '../../core/domain/entities/game.entity';
import { GAME_REPOSITORY_TOKEN } from '../../app.config';

@Injectable()
export class GameEffects {
  constructor(
    private actions$: Actions,
    @Inject(GAME_REPOSITORY_TOKEN) private gameRepository: GameRepository
  ) {}

  loadGames$ = createEffect(() => this.actions$.pipe(
    ofType(loadGames),
    mergeMap(() =>
      this.gameRepository.getAll().pipe(
        map((games: Game[]) => loadGamesSuccess({ games })),
        catchError((error: any) => of(loadGamesFailure({ error })))
      )
    )
  ));
}
