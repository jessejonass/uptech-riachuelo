import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
    return (
        <div className="header__container">
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>
            <strong>Books+</strong>
        </div>
    );
};

export default Header;
