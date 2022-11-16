import { useState } from "react";
import { Game } from "../../Domain/Model/Game";
import { GetGamesUseCase } from "../../Domain/UseCase/GetGames";

export default function GameListViewModel(getGamesUseCase: GetGamesUseCase) {
    const [games, setGames] = useState<Game[]>([]);

    async function getGames() {
        setGames(await getGamesUseCase.invoke());
    }

    return {getGames, games};
}
