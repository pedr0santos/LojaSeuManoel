import { Observable, of } from "rxjs";
import { Game } from "../../core/domain/entities/game.entity";
import { GameRepository } from "../../core/domain/repositories/game-repository.interface";
import { GameApiService } from "../../services/game-api.service";

export class GameRepositoryImpl implements GameRepository {
  constructor(private apiService: GameApiService) {}

  create(game: Game): Observable<void> {
    return this.apiService.create(game);
  }

  getAll(): Observable<Game[]> {
    return this.apiService.getAll();
  }
}
