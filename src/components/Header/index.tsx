import React from 'react';
import { Link } from 'react-router-dom';
import { useSearch } from '../../hooks/search';

import './styles.scss';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
    const { searchBooks } = useSearch();
    return (
        <div className="header__container">
            <Link to="/" onClick={() => searchBooks('')}>
                <img src={logo} alt="Logo" />
            </Link>
            <strong>Books+</strong>
        </div>
    );
};

export default Header;
