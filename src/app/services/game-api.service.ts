import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Game } from '../core/domain/entities/game.entity';
import { GameMapper } from '../data/mappers/game-mapper';

@Injectable({
  providedIn: 'root'
})
export class GameApiService {
  private apiUrl = 'https://api.exemplo.com/games'; // URL da API real

  constructor(private http: HttpClient) {}

  create(game: Game): Observable<void> {
    const apiGame = GameMapper.toApi(game);
    return this.http.post<void>(this.apiUrl, apiGame).pipe(
      catchError(error => {
        console.error('Erro ao criar jogo', error);
        return of(); // Retorna um Observable vazio em caso de erro
      })
    );
  }

  getAll(): Observable<Game[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(games => games.map(game => GameMapper.toDomain(game))),
      catchError(error => {
        console.error('Erro ao obter jogos', error);
        return of([]); // Retorna um Observable vazio em caso de erro
      })
    );
  }
}
