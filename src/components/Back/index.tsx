import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';

import './styles.scss';

const Back: React.FC = () => {
    return (
        <Link to="/" className="back__container">
            <div>
                <IoMdArrowBack color="#e5e5e5" />
            </div>
            <span>Voltar para o menu</span>
        </Link>
    );
};

export default Back;
