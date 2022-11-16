import { GameAPIEntity } from "./GameAPIEntity";


export interface DateAPIEntity {
    date: string;
    totalItems: number;
    totalEvents: number;
    totalGames: number;
    totalMatches: number;
    games: GameAPIEntity[];
}
