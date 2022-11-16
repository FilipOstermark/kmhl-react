import { Game } from "../Model/Game";
import { StatsRepository } from "../Repository/StatsRepository";

export class GetGamesUseCase {
    repository: StatsRepository;

    constructor(_repository: StatsRepository) {
        this.repository = _repository;
    }

    async invoke(): Promise<Game[]> {
        return this.repository.getGames();
    }
}
