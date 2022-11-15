import { Team } from "../../Domain/Model/Team";
import StatsDataSource from "../DataSource/StatsDataSource";
import { StatsRepository as StatsRepository } from "../../Domain/Repository/StatsRepository";
import { Division } from "../../Domain/Model/Division";

export class StatsRepositoryImpl implements StatsRepository {
    dataSource: StatsDataSource;

    constructor(_dataSource: StatsDataSource) {
        this.dataSource = _dataSource;
    }

    async getDivisions(): Promise<Division[]> {
        return this.dataSource.getDivisions();
    }
}
