import { Division } from "../../Domain/Model/Division";

export default interface StatsDataSource {
    getDivisions(): Promise<Division[]>;
}
