import { Observable } from "rxjs";
import { Game } from "../domain/entities/game.entity";
import { GameRepository } from "../domain/repositories/game-repository.interface";

export class GetAllGamesUseCase {
  constructor(private repository: GameRepository) {}

  execute(): Observable<Game[]> {
    return this.repository.getAll();
  }
}
