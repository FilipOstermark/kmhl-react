import React, { useEffect } from "react";
import { Division } from "../../Domain/Model/Division";
import { GetDivisionsUseCase } from "../../Domain/UseCase/GetDivisions";
import { useViewModel } from "./StandingsViewModel";
import DivisionView from "./DivisionView";

interface StandingsViewProps {
    getDivisionsUseCase: GetDivisionsUseCase
}

const StandingsView: React.FC<StandingsViewProps> = (
    props: StandingsViewProps
) => {
    const { getDivisions, divisions } = useViewModel(props.getDivisionsUseCase);

    useEffect(() => {
        getDivisions().then(() => {}).catch(() => {});
    }, []);

    return (
        <div className="DivisionListView">
            {divisions.map((division: Division) => {
                return (<DivisionView key={division.id} division={division} />);
            })}
        </div>
    );
};

export default StandingsView;
