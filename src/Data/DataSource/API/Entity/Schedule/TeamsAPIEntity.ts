import { GameTeamAPIEntity } from "./GameTeamAPIEntity";


export interface TeamsAPIEntity {
    away: GameTeamAPIEntity;
    home: GameTeamAPIEntity;
}
