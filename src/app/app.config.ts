import { ApplicationConfig, InjectionToken, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { gameReducer } from './presentation/state/game.reducer';
import { GameEffects } from './presentation/state/game.effects';
import { GameRepositoryImpl } from './data/repositories/game-repository-impl';
import { GameApiService } from './services/game-api.service';
import { GameRepository } from './core/domain/repositories/game-repository.interface';

export const GAME_REPOSITORY_TOKEN = new InjectionToken<GameRepository>('GameRepository');

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore({ gameState: gameReducer }),
    provideEffects(GameEffects),
    provideZoneChangeDetection({ eventCoalescing: true }),
    { provide: GAME_REPOSITORY_TOKEN, useClass: GameRepositoryImpl },
    GameApiService
  ],
};
