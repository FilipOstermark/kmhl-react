import React from "react";
import { Division } from "../../Domain/Model/Division";
import TeamView from "./TeamView";

interface DivisionProps {
    division: Division
}

const DivisionView: React.FC<DivisionProps> = (props: DivisionProps) => {
    const { name, teams } = props.division;

    return (
        <div className="DivisionView">
            <h1>{name} Division</h1>
            <table className="DivisionRankTable">
                <thead>
                    <tr className="DivisionHeaders">
                        <th>Rank</th>
                        <th>Team</th>
                        <th>GP</th>
                        <th>PTS</th>
                        <th>WLO</th>
                        <th>STRK</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team) => {
                        return (<TeamView key={team.id} team={team} />);
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DivisionView;
