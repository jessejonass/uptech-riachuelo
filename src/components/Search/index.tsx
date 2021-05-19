import React from 'react';
import { FiSearch, FiHeart } from 'react-icons/fi';

import './styles.scss';

const Search: React.FC = () => {
    return (
        <div className="search__container">
            <h1>
                Olá. Bem vindx ao <br /> Books+
            </h1>

            <p>
                Faça uma busca por nossa biblioteca, econtre e salve seus livros
                favoritos :)
            </p>

            <div className="search__input">
                <input type="text" />
                <button type="submit">
                    <FiSearch />
                </button>
            </div>
        </div>
    );
};

export default Search;
