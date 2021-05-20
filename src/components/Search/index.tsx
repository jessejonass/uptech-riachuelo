import React, { useCallback, useState } from 'react';
import { AiFillHeart, AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import Loader from 'react-loader-spinner';
import { useSearch } from '../../hooks/search';

import './styles.scss';

const Search: React.FC = () => {
    const [term, setTerm] = useState('');
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
                Faça uma busca por nossa biblioteca, encontre e salve seus
                livros favoritos :)
            </p>

            <form
                className="search__input"
                onSubmit={e => {
                    e.preventDefault();
                    handleSearchBooks(term);
                }}
            >
                <input
                    type="text"
                    placeholder="Busque um livro"
                    onChange={e => setTerm(e.target.value)}
                />
                <button type="button" onClick={() => handleSearchBooks(term)}>
                    {loading ? (
                        <Loader
                            type="ThreeDots"
                            color="#e5e5e5"
                            height={30}
                            width={30}
                        />
                    ) : (
                        <AiOutlineSearch />
                    )}
                </button>
            </form>

            <Link to="/favorites" className="search__favorites">
                <span>Ver meus favoritos</span>
                <AiFillHeart />
            </Link>
        </div>
    );
};

export default Search;
