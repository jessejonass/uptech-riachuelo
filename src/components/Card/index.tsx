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
        language?: string;
        previewLink?: string;
        publishedDate: string;
    };
    favorite?: boolean;
}

const Card: React.FC<Book> = ({ id, selfLink, volumeInfo, favorite: f }) => {
    const [favorite, setFavorite] = useState(false);
    // const { title, subtitle, imageLinks, publishedDate } = volumeInfo;
    const { addFavorite } = useFavorite();

    const handleFavorite = useCallback(
        fav => {
            addFavorite(fav);
            setFavorite(!favorite);
        },
        [addFavorite, favorite],
    );

    return (
        <div className="card__container">
            <div className="image__card">
                {volumeInfo?.imageLinks?.thumbnail ? (
                    <img
                        src={volumeInfo?.imageLinks?.thumbnail}
                        alt={volumeInfo?.title}
                    />
                ) : (
                    <img
                        src="https://via.placeholder.com/128x184"
                        alt="Placeholder"
                    />
                )}
            </div>

            <div className="info__card">
                <div className="card__header">
                    <strong>{volumeInfo?.title}</strong>
                    <span>{volumeInfo?.subtitle}</span>
                    <span>
                        Lançamento:{' '}
                        <strong>
                            {new Date(
                                volumeInfo?.publishedDate,
                            ).toLocaleDateString()}
                        </strong>
                    </span>
                </div>

                <div className="card__footer">
                    <a href={`/details/${id}`}>Ver detalhes</a>

                    <button
                        type="button"
                        onClick={async () => {
                            handleFavorite({ id, selfLink, volumeInfo });
                        }}
                    >
                        {favorite || f ? (
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
