import React from 'react';
import Card from '../../components/Card';
import Search from '../../components/Search';
import { useSearch } from '../../hooks/search';
import { useFavorite } from '../../hooks/favorites';

import './styles.scss';
import Pagination from '../../components/Pagination';
import note from '../../assets/note.svg';
import search from '../../assets/search.svg';

const Home: React.FC = () => {
    const { books } = useSearch();
    const { favorites } = useFavorite();

    return (
        <>
            <Search />
            {books && Object.keys(books)?.length === 0 && (
                <div className="home__empty">
                    <img src={note} alt="Busca" />
                    <strong>
                        Faça uma busca por autor, livro ou palavra chave
                    </strong>
                </div>
            )}

            <div className="home__container">
                {books &&
                    books.map(book => (
                        <Card
                            key={book.id}
                            id={book.id}
                            volumeInfo={book.volumeInfo}
                            selfLink={book.selfLink}
                            favorite={!!favorites.find(f => f.id === book.id)}
                        />
                    ))}
            </div>

            {!books && (
                <div className="home__not-found">
                    <strong>Não foram encontrados registros</strong>
                    <img src={search} alt="Busca" />
                </div>
            )}

            {books && Object.keys(books)?.length > 0 && (
                <>
                    <Pagination />
                </>
            )}
        </>
    );
};

export default Home;
