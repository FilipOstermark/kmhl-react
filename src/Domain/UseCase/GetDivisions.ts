import { Division } from "../Model/Division";
import { StatsRepository } from "../Repository/StatsRepository";

export class GetDivisionsUseCase {
    repository: StatsRepository;

    constructor(_repository: StatsRepository) {
        this.repository = _repository;
    }

    async invoke(): Promise<Division[]> {
        return this.repository.getDivisions();
    }
}
