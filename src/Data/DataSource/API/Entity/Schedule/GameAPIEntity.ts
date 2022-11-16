import { ContentAPIEntity } from "./ContentAPIEntity";
import { StatusAPIEntity } from "./StatusAPIEntity";
import { TeamsAPIEntity } from "./TeamsAPIEntity";


export interface GameAPIEntity {
    gamePk: number;
    link: string;
    gameType: string;
    season: string;
    gameDate: string;
    status: StatusAPIEntity;
    teams: TeamsAPIEntity;
    // venue omitted
    content: ContentAPIEntity;
}
