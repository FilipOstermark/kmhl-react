import { Division } from "../Domain/Model/Division";
import { TeamView } from "./TeamView";

interface DivisionProps {
    division: Division
}

export default function DivisionView(props: DivisionProps) {
    const { name, teams } = props.division;

    return (
        <div className="DivisionView">
            <h1>{name} Division</h1>
            <table className="DivisionRankTable">
                <thead>
                    <tr className="DivisionHeaders">
                        <th>Rank</th>
                        <th>Team</th>
                        <th>Points</th>
                        <th>WLO</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team) => { return (<TeamView key={team.id} team={team} />); })}
                </tbody>
            </table>
        </div>
    );
}