import { Division } from "../../Domain/Model/Division";
import { Game } from "../../Domain/Model/Game";

export default interface StatsDataSource {
    getDivisions(): Promise<Division[]>;
    getGames(): Promise<Game[]>;
}
