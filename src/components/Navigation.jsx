import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul className="flex gap-5">
                <Link className="text-slate-50" to={'/'}>
                    Home
                </Link>
                <Link className="text-slate-50" to={'/post'}>
                    Post
                </Link>
                <Link className="text-slate-50" to={'/users'}>
                    Users
                </Link>
            </ul>
        </nav>
    );
};

export default Navigation;
