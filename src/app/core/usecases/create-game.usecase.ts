import { Observable } from "rxjs";
import { GameRepository } from "../domain/repositories/game-repository.interface";
import { Game } from "../domain/entities/game.entity";

export class CreateGameUseCase {
  constructor(private repository: GameRepository) {}

  execute(game: Game): Observable<void> {
    return this.repository.create(game);
  }
}
