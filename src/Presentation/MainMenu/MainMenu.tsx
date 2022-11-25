import React from "react";
import { Link } from "react-router-dom";
import styles from "./MainMenu.module.css";
import { ReactComponent as NhlLogo } from "../Assets/Images/nhllogo.svg";

const MainMenu: React.FC<{}> = () => {
    return (
        <nav className={ styles.MainMenu } >
            <div>
                <Link className={ styles.Link } to="/highlights">Highlights</Link>
                <hr />
            </div>
            <NhlLogo id="NhlLogo" />
            <div>
                <Link to="/standings">Standings</Link>
                <hr></hr>
            </div>
        </nav>
    );
};

export default MainMenu;
