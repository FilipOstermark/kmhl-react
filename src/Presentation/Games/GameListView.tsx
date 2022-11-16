import React, { useEffect } from 'react';
import { GetGamesUseCase } from '../../Domain/UseCase/GetGames';
import useViewModel from "./GameListViewModel";
import GameView from './GameView';

interface GamesListViewProps {
  getGamesUseCase: GetGamesUseCase
}

export default function GameListView(props: GamesListViewProps) {
  const { getGames, games } = useViewModel(props.getGamesUseCase);
  
  useEffect(() => {
    getGames();
  }, []);

  const today = new Date();
  console.log(today);
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');

  return (
    <div className='GameListView'>
      <h1>Highlights4</h1>
      <h2>{year}-{month}-{day}</h2>
      <div className='GameListGrid'>
        {
          games.map(
            (game) => {
              return (<GameView key={game.id} game={game} />);
            }
          )
        }
      </div>
    </div>
  );
}