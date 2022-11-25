import React, { useEffect } from "react";
import { Division } from "../../Domain/Model/Division";
import { GetDivisionsUseCase } from "../../Domain/UseCase/GetDivisions";
import { useViewModel } from "./DivisionListViewModel";
import DivisionView from "./DivisionView";

interface DivisionListViewProps {
    getDivisionUseCase: GetDivisionsUseCase
}

const DivisionListView: React.FC<DivisionListViewProps> = (
    props: DivisionListViewProps
) => {
    const { getDivisions, divisions } = useViewModel(props.getDivisionUseCase);

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

export default DivisionListView;
