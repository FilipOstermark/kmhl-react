import './App.css';
import DivisionListView from './Presentation/Division/DivisionListView';
import { getDivisionsUseCase, getGamesUseCase } from './Core/DepencencyInjection';
import Header from './Presentation/PageComponents/Header';
import GameListView from './Presentation/Games/GameListView';

function App() {
  return (
    <div className="App">
      <Header />
      <GameListView getGamesUseCase={getGamesUseCase} />
      <DivisionListView getDivisionUseCase={getDivisionsUseCase} />
    </div>
  );
}

export default App;
