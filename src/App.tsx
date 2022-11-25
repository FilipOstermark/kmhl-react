import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import MainMenu from "./Presentation/MainMenu/MainMenu";
import HighlightsView from "./Presentation/Highlights/HighlightsView";
import StandingsView from "./Presentation/Standings/StandingsView";
import { getGamesUseCase, getDivisionsUseCase } from "./Core/DepencencyInjection";
import "./App.css";

const App: React.FC<{}> = () => {
    return (
        <BrowserRouter>
            <Outlet />

            <Routes>
                <Route path="/" element={<MainMenu />} />
                <Route
                    path="/highlights"
                    element={<HighlightsView getGamesUseCase={getGamesUseCase} />}
                />
                <Route
                    path="/standings"
                    element={
                        <StandingsView getDivisionsUseCase={getDivisionsUseCase} />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
