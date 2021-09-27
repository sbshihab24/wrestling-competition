import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <header className="header">
                <h1>Make a wrestling competition</h1>
                <h2>The wrestling competition name is <span className="custom-color">WrestleMania </span> </h2>
                <h3>Total Budget : <span className="custom-color">100000$</span> </h3>
            </header>
        </div>
    );
};

export default Header;