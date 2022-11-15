import axios from "axios";
import { URL_STANDINGS } from "../../../Core/Constants";
import { RecordAPIEntity } from "./Entity/RecordAPIEntity";
import { Division } from "../../../Domain/Model/Division";
import { TeamRecordAPIEntity } from "./Entity/TeamRecordAPIEntity";
import { Team } from "../../../Domain/Model/Team";
import StatsDataSource from "../StatsDataSource";

async function getRecords(): Promise<RecordAPIEntity[]> {
    return (await axios.get(URL_STANDINGS)).data.records;
}

function mapTeamRecordAPIEntityToTeam(entity: TeamRecordAPIEntity): Team {
    return {
        id: entity.team.id,
        name: entity.team.name,
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
        gamesPlayed: +entity.gamesPlayed
    }
}

function mapRecordAPIEntityToDivision(entity: RecordAPIEntity): Division {
    return {
        id: entity.division.id,
        name: entity.division.name,
        teams: entity.teamRecords.map(mapTeamRecordAPIEntityToTeam)
    }
}

export default class StatsAPIDataSourceImpl implements StatsDataSource {
    async getDivisions(): Promise<Division[]> {
        const recordEntities = await getRecords();
        return recordEntities.map(mapRecordAPIEntityToDivision);
    }
}
