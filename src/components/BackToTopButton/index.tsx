import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

import './styles.scss';

const BackToTopButton: React.FC = () => {
    return (
        <button type="button" className="back-to-top-button__container">
            <FiArrowUp size={20} />
        </button>
    );
};

export default BackToTopButton;
