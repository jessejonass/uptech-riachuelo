import React from 'react';
import { useFavorite } from '../../hooks/favorites';
import Card from '../../components/Card';

import './styles.scss';

import Back from '../../components/Back';

const Favorites: React.FC = () => {
    const { favorites } = useFavorite();

    return (
        <div className="favorites__container">
            <Back />
            <h2>Essa é sua lista de livros favoritos</h2>

            <div className="favorites__list">
                {favorites.map(favorite => (
                    <Card
                        key={favorite.id}
                        id={favorite.id}
                        volumeInfo={favorite.volumeInfo}
                        selfLink={favorite.selfLink}
                        favorite
                    />
                ))}
            </div>
        </div>
    );
};

export default Favorites;
