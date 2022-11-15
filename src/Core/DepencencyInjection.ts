// TODO Find out how to do dependency injection properly.

import StatsAPIDataSourceImpl from "../Data/DataSource/API/StatsAPIDataSourceImpl";
import StatsDataSource from "../Data/DataSource/StatsDataSource";
import { StatsRepositoryImpl } from "../Data/Repository/StatsRepositoryImpl";
import { StatsRepository } from "../Domain/Repository/StatsRepository";
import { GetDivisionsUseCase } from "../Domain/UseCase/GetDivisions";

const statsAPIDataSource: StatsDataSource = new StatsAPIDataSourceImpl()
const statsRepository: StatsRepository = new StatsRepositoryImpl(statsAPIDataSource)

export const getDivisionsUseCase = new GetDivisionsUseCase(statsRepository)
