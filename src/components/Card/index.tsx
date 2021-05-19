import React from 'react';

import './styles.scss';

interface CardProps {
    title: string;
    thumbnail: string;
}

const Card: React.FC<CardProps> = ({ title, thumbnail }) => {
    return (
        <div className="card__container">
            <div className="image__card">
                <img src={thumbnail} alt={title} />
            </div>

            <div className="info__card">
                <strong>{title}</strong>
            </div>
        </div>
    );
};

export default Card;
