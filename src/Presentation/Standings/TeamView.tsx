import React from "react";
import { Team } from "../../Domain/Model/Team";

interface TeamViewProps {
    team: Team
}

function getWindowSize(): { innerWidth: number, innerHeight: number } {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

const TeamView: React.FC<TeamViewProps> = (props: TeamViewProps) => {
    const team = props.team;
    const { innerWidth } = getWindowSize();

    // TODO Smarter handling - and use team.nameShort when required
    const shortWinWidth = 1000;
    const teamName = innerWidth >= shortWinWidth ? team.name : team.name;

    return (
        <tr className="TeamView">
            <td>{team.divisionRank}</td>
            <td>{teamName}</td>
            <td>{team.gamesPlayed}</td>
            <td>{team.points}</td>
            <td>{team.wins}-{team.losses}-{team.ot}</td>
            <td>{team.streakCode}</td>
        </tr>
    );
};

export default TeamView;
