import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import './styles.scss';

interface CardProps {
    book: {
        title: string;
        description: string;
        imageLinks: {
            thumbnail: string;
        };
    };
}

const Card: React.FC<CardProps> = ({ book }) => {
    const [favorite, setFavorite] = useState(false);

    const { title, imageLinks, description } = book;

    return (
        <div className="card__container">
            <div className="image__card">
                {imageLinks?.thumbnail ? (
                    <img src={imageLinks?.thumbnail} alt={title} />
                ) : (
                    <img
                        src="https://via.placeholder.com/128x184"
                        alt="Placeholder"
                    />
                )}
            </div>

            <div className="info__card">
                <div className="card__header">
                    <strong>{title}</strong>
                    <span>{description}</span>
                </div>

                <div className="card__footer">
                    <a href="/">Ver detalhes</a>

                    <button
                        type="button"
                        onClick={() => setFavorite(!favorite)}
                    >
                        {favorite ? (
                            <AiFillHeart color="#c53030" size={20} />
                        ) : (
                            <AiOutlineHeart size={20} />
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
