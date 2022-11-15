import './App.css';
import DivisionListView from './Presentation/DivisionListView';
import { getDivisionsUseCase } from './Core/DepencencyInjection';

function App() {
  return (
    <div className="App">
      <DivisionListView getDivisionUseCase={getDivisionsUseCase} />
    </div>
  );
}

export default App;
