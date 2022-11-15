import React from "react";
import { Team } from "../Domain/Model/Team";

interface TeamViewProps {
    team: Team
}

export function TeamView(props: TeamViewProps) {
    const team = props.team
    return (
        <tr className="TeamView">
            <td>{team.divisionRank}</td>
            <td>{team.name}</td>
            <td>{team.points}</td>
            <td>{team.wins} - {team.losses} - {team.ot}</td>
        </tr>
    );
}