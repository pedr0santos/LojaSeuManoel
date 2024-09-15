import { Game } from "../../core/domain/entities/game.entity";

export class GameMapper {
  static toDomain(apiGame: any): Game {
    return new Game(apiGame.name, apiGame.price, apiGame.boxDimensions, apiGame.description, apiGame.coverImage);
  }

  static toApi(game: Game): any {
    return {
      name: game.name,
      price: game.price,
      boxDimensions: game.boxDimensions,
      description: game.description,
      coverImage: game.coverImage
    };
  }
}
