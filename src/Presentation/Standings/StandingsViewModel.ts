import { useState } from "react";
import { Division } from "../../Domain/Model/Division";
import { GetDivisionsUseCase } from "../../Domain/UseCase/GetDivisions";

export default interface StandingsViewModel {
    getDivisions: () => Promise<void>
    divisions: Division[]
}

export function useViewModel(
    getDivisionsUseCase: GetDivisionsUseCase
): StandingsViewModel {
    const [divisions, setDivisions] = useState<Division[]>([]);

    async function getDivisions(): Promise<void> {
        setDivisions(await getDivisionsUseCase.invoke());
    }

    return { getDivisions, divisions };
}
