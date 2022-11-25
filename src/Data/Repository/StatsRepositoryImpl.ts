import StatsDataSource from "../DataSource/StatsDataSource";
import { StatsRepository } from "../../Domain/Repository/StatsRepository";
import { Division } from "../../Domain/Model/Division";
import { Game } from "../../Domain/Model/Game";

export class StatsRepositoryImpl implements StatsRepository {
    dataSource: StatsDataSource;

    constructor(_dataSource: StatsDataSource) {
        this.dataSource = _dataSource;
    }

    async getDivisions(): Promise<Division[]> {
        return await this.dataSource.getDivisions();
    }

    async getGames(): Promise<Game[]> {
        return await this.dataSource.getGames();
    }
}
