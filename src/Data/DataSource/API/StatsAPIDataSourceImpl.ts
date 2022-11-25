import axios from "axios";
import { URL_STANDINGS, URL_SCHEDULE } from "../../../Core/Constants";
import { RecordAPIEntity } from "./Entity/Standings/RecordAPIEntity";
import { Division } from "../../../Domain/Model/Division";
import { TeamRecordAPIEntity } from "./Entity/Standings/TeamRecordAPIEntity";
import { Team } from "../../../Domain/Model/Team";
import StatsDataSource from "../StatsDataSource";
import { Game } from "../../../Domain/Model/Game";
import { GameAPIEntity } from "./Entity/Schedule/GameAPIEntity";
import { ScheduleAPIEntity } from "./Entity/Schedule/ScheduleAPIEntity";

async function getRecords(): Promise<RecordAPIEntity[]> {
    return (await axios.get(URL_STANDINGS)).data.records;
}

async function getSchedule(): Promise<ScheduleAPIEntity> {
    return (await axios.get(URL_SCHEDULE)).data;
}

function mapTeamRecordAPIEntityToTeam(entity: TeamRecordAPIEntity): Team {
    return {
        id: entity.team.id,
        name: entity.team.name,
        nameShort: entity.team.nameShort,
        divisionRank: +entity.divisionRank,
        wins: entity.leagueRecord.wins,
        losses: entity.leagueRecord.losses,
        ot: entity.leagueRecord.ot,
        regulationWins: +entity.regulationWins,
        goalsAgainst: +entity.goalsAgainst,
        goalsScored: +entity.goalsScored,
        points: +entity.points,
        divisionL10Rank: +entity.divisionL10Rank,
        divisionRoadRank: +entity.divisionRoadRank,
        divisionHomeRank: +entity.divisionHomeRank,
        conferenceRank: +entity.conferenceRank,
        conferenceL10Rank: +entity.conferenceL10Rank,
        conferenceRoadRank: +entity.conferenceRoadRank,
        conferenceHomeRank: +entity.conferenceHomeRank,
        leagueRank: +entity.leagueRank,
        leagueL10Rank: +entity.leagueL10Rank,
        leagueRoadRank: +entity.leagueRoadRank,
        leagueHomeRank: +entity.leagueHomeRank,
        wildCardRank: +entity.wildCardRank,
        row: +entity.row,
        gamesPlayed: +entity.gamesPlayed,
        streakCode: entity.streak.streakCode
    };
}

function mapRecordAPIEntityToDivision(entity: RecordAPIEntity): Division {
    return {
        id: entity.division.id,
        name: entity.division.name,
        teams: entity.teamRecords.map(mapTeamRecordAPIEntityToTeam)
    };
}

function mapGameAPIEntityToGame(entity: GameAPIEntity): Game {
    return {
        id: entity.gamePk,
        feedLink: entity.link,
        date: entity.gameDate,
        homeTeamName: entity.teams.home.team.name,
        homeTeamScore: entity.teams.home.score,
        awayTeamName: entity.teams.away.team.name,
        awayTeamScore: entity.teams.away.score
    };
};

function mapScheduleAPIEntityToGames(entity: ScheduleAPIEntity): Game[] {
    return entity.dates.flatMap(
        (date) => {
            return date.games.map(mapGameAPIEntityToGame);
        }
    );
}

export default class StatsAPIDataSourceImpl implements StatsDataSource {
    async getDivisions(): Promise<Division[]> {
        const recordEntities = await getRecords();
        return recordEntities.map(mapRecordAPIEntityToDivision);
    }

    async getGames(): Promise<Game[]> {
        const schedule = await getSchedule();
        return mapScheduleAPIEntityToGames(schedule);
    }
}
