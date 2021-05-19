import React from 'react';

import './styles.scss';

import Back from '../../components/Back';

const Favorites: React.FC = () => {
    return (
        <div className="favorites__container">
            <Back />
            <h2>Essa é sua lista de livros favoritos</h2>
        </div>
    );
};

export default Favorites;
