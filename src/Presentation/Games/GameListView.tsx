import React, { useEffect } from "react";
import { Game } from "../../Domain/Model/Game";
import { GetGamesUseCase } from "../../Domain/UseCase/GetGames";
import { useViewModel } from "./GameListViewModel";
import GameView from "./GameView";

interface GamesListViewProps {
    getGamesUseCase: GetGamesUseCase
}

const GameListView: React.FC<GamesListViewProps> = (
    props: GamesListViewProps
) => {
    const { getGames, games } = useViewModel(props.getGamesUseCase);

    useEffect(() => {
        getGames().then(() => {}).catch(() => {});
    }, []);

    return (
        <div className='GameListView'>
            <h1>Highlights4</h1>
            <h2>Last night&apos;s highlights.</h2>
            <div className='GameListGrid'>
                {
                    games.map(
                        (game: Game) => {
                            return (<GameView key={game.id} game={game} />);
                        }
                    )
                }
            </div>
        </div>
    );
};

export default GameListView;
