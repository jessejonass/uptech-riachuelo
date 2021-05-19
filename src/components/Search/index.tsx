import React, { useCallback, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import Loader from 'react-loader-spinner';
import { useSearch } from '../../hooks/search';

import './styles.scss';

const Search: React.FC = () => {
    const [therm, setTherm] = useState('');
    const { searchBooks, loading } = useSearch();

    const handleSearchBooks = useCallback(
        (key: string) => {
            searchBooks(key);
        },
        [searchBooks],
    );

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
                <input
                    type="text"
                    placeholder="Busque um livro"
                    onChange={e => setTherm(e.target.value)}
                />
                <button type="submit" onClick={() => handleSearchBooks(therm)}>
                    {loading ? (
                        <Loader
                            type="ThreeDots"
                            color="#e5e5e5"
                            height={30}
                            width={30}
                            timeout={3000} // 3 secs
                        />
                    ) : (
                        <FiSearch />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Search;
