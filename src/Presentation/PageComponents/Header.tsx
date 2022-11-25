import React from "react";
import { ReactComponent as NhlLogo } from "../Assets/Images/nhllogo.svg";

const Header: React.FC = () => {
    return (
        <header className='PageHeader'>
            <div>
                <h1>NHL</h1>
                <hr />
                <h2>2022</h2>
            </div>
            <NhlLogo id="NhlLogo" />
            <div>
                <h1>STATS</h1>
                <hr />
                <h2>2023</h2>
            </div>
        </header>
    );
};

export default Header;
