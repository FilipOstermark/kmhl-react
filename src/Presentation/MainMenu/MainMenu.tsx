import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const MainMenu: React.FC<{}> = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Main menu</Link></li>
                    <li>
                        <Link to="/highlights">Highlights</Link>
                    </li>
                    <li>
                        <Link to="/standings">Standings</Link>
                    </li>
                </ul>
            </nav>
        </Router>
    );
};

export default MainMenu;
