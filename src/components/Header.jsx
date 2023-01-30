import React from 'react';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className="flex justify-between items-center mb-5">
            <h1>Blog</h1>
            <Navigation />
        </header>
    );
};

export default Header;
