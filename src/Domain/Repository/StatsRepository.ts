import { Division } from "../Model/Division";
import { Game } from "../Model/Game";

export interface StatsRepository {
    getDivisions: () => Promise<Division[]>
    getGames: () => Promise<Game[]>
}
