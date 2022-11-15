import { Division } from "../Model/Division"

export interface StatsRepository {
    getDivisions(): Promise<Division[]>;
}
