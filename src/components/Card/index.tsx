import React, { useCallback, useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useFavorite } from '../../hooks/favorites';

import './styles.scss';

interface Book {
    id: string;
    selfLink: string;
    volumeInfo: {
        title: string;
        subtitle?: string;
        imageLinks: {
            thumbnail: string;
            smallThumbnail: string;
        };
        language: string;
        previewLink: string;
    };
}

const Card: React.FC<Book> = ({ id, selfLink, volumeInfo }) => {
    const [favorite, setFavorite] = useState(false);

    const { title, subtitle, imageLinks, language, previewLink } = volumeInfo;

    const { addFavorite } = useFavorite();

    const handleFavorite = useCallback(
        fav => {
            addFavorite(fav);
        },
        [addFavorite],
    );

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
                    <span>{subtitle}</span>
                </div>

                <div className="card__footer">
                    <a href="/">Ver detalhes</a>

                    <button
                        type="button"
                        onClick={() => {
                            handleFavorite({ id, selfLink, volumeInfo });
                        }}
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
