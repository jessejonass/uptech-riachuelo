import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';

import './styles.scss';

const Back: React.FC = () => {
    return (
        <a href="/" className="back__container">
            <div>
                <IoMdArrowBack color="#e5e5e5" />
            </div>
            <span>Voltar para o menu</span>
        </a>
    );
};

export default Back;
