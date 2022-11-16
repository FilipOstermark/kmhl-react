import { useState } from "react";
import { Division } from "../../Domain/Model/Division";
import { GetDivisionsUseCase } from "../../Domain/UseCase/GetDivisions";

export default function DivisionListViewModel(
    getDivisionsUseCase: GetDivisionsUseCase
) { 
    const [divisions, setDivisions] = useState<Division[]>([]);

    async function getDivisions() {
        setDivisions(await getDivisionsUseCase.invoke());
    }

    return { getDivisions, divisions };
}
