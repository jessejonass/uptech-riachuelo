import React from 'react';
import Card from '../../components/Card';
import Search from '../../components/Search';
import { useSearch } from '../../hooks/search';

import './styles.scss';
import Pagination from '../../components/Pagination';
import thinking from '../../assets/thinking.svg';
import note from '../../assets/note.svg';

const Home: React.FC = () => {
    const { books } = useSearch();

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
                {books ? (
                    books.map(book => (
                        <Card
                            key={book.id}
                            id={book.id}
                            volumeInfo={book.volumeInfo}
                            selfLink={book.selfLink}
                        />
                    ))
                ) : (
                    <strong>Sem resultados</strong>
                )}
            </div>

            {books && Object.keys(books)?.length > 0 && (
                <>
                    <Pagination />
                </>
            )}
        </>
    );
};

export default Home;
