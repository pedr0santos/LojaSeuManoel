import { Observable } from "rxjs";
import { Game } from "../entities/game.entity";

export interface GameRepository {
  create(game: Game): Observable<void>;
  getAll(): Observable<Game[]>;
}
