import { LeagueRecordAPIEntity } from "./LeagueRecordAPIEntity";
import { StreakAPIEntity } from "./StreakAPIEntity";
import { TeamAPIEntity } from "./TeamAPIEntity";


export interface TeamRecordAPIEntity {
    team: TeamAPIEntity;
    leagueRecord: LeagueRecordAPIEntity;
    regulationWins: number;
    goalsAgainst: number;
    goalsScored: number;
    points: number;
    divisionRank: string;
    divisionL10Rank: string;
    divisionRoadRank: string;
    divisionHomeRank: string;
    conferenceRank: string;
    conferenceL10Rank: string;
    conferenceRoadRank: string;
    conferenceHomeRank: string;
    leagueRank: string;
    leagueL10Rank: string;
    leagueRoadRank: string;
    leagueHomeRank: string;
    wildCardRank: string;
    row: number;
    gamesPlayed: number;
    streak: StreakAPIEntity;
    pointsPercentage: number;
    ppDivisionRank: string;
    ppConferenceRank: string;
    ppLeagueRank: string;
    lastUpdated: string;
}
