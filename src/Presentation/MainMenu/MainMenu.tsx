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
                <h2>2022</h2>
            </div>
            <NhlLogo id="NhlLogo" />
            <div>
                <Link to="/standings">Standings</Link>
                <hr></hr>
                <h2>2023</h2>
            </div>
        </nav>
    );
};

export default MainMenu;
