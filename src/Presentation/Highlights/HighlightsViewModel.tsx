import { useState } from "react";
import { Game } from "../../Domain/Model/Game";
import { GetGamesUseCase } from "../../Domain/UseCase/GetGames";

export default interface HighlightsViewModel {
    getGames: () => Promise<void>
    games: Game[]
}

export function useViewModel(getGamesUseCase: GetGamesUseCase): HighlightsViewModel {
    const [games, setGames] = useState<Game[]>([]);

    async function getGames(): Promise<void> {
        setGames(await getGamesUseCase.invoke());
    }

    return { getGames, games };
};
