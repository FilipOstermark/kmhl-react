import React from "react";
import { HashRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import MainMenu from "./Presentation/MainMenu/MainMenu";
import HighlightsView from "./Presentation/Highlights/HighlightsView";
import StandingsView from "./Presentation/Standings/StandingsView";
import { getGamesUseCase, getDivisionsUseCase } from "./Core/DepencencyInjection";
import "./App.css";

const App: React.FC<{}> = () => {
    return (
        <Router>
            <Outlet />

            <Routes>
                <Route
                    path="/highlights"
                    element={<HighlightsView getGamesUseCase={getGamesUseCase} />}
                />
                <Route
                    path="/standings"
                    element={<StandingsView getDivisionsUseCase={getDivisionsUseCase} />}
                />
                <Route path="*" element={<MainMenu />} />
            </Routes>
        </Router>
    );
};

export default App;
