import { useEffect } from "react";
import { GetDivisionsUseCase } from "../Domain/UseCase/GetDivisions";
import useViewModel from "./DivisionListViewModel";
import DivisionView from "./DivisionView";

interface DivisionListViewProps {
    getDivisionUseCase: GetDivisionsUseCase
}

export default function DivisionListView(props: DivisionListViewProps) {
    const { getDivisions, divisions } = useViewModel(props.getDivisionUseCase);

    useEffect(() => {
        getDivisions();
    }, []);

    return (
        <div className="DivisionListView">
            {divisions.map((division) => {
                return (<DivisionView key={division.id} division={division} />);
            })}
        </div>
    );
}