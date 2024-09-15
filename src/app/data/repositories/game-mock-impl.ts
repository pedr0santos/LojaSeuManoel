import { Observable, of } from "rxjs";
import { Game } from "../../core/domain/entities/game.entity";
import { GameRepository } from "../../core/domain/repositories/game-repository.interface";
import { GameMapper } from "../mappers/game-mapper";

export class GameMockRepository implements GameRepository {
  private games: any[] = []; // Mock de dados

  create(game: Game): Observable<void> {
    const apiGame = GameMapper.toApi(game);
    this.games.push(apiGame); // Simulando envio para uma API
    return of(); // Retorna um Observable vazio para indicar sucesso
  }

  getAll(): Observable<Game[]> {
    const domainGames = this.games.map(game => GameMapper.toDomain(game));
    return of(domainGames); // Simula o recebimento de uma API e retorna como Observable
  }
}
