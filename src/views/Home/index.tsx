import React from 'react';
import Card from '../../components/Card';
import Search from '../../components/Search';
import { useSearch } from '../../hooks/search';

import './styles.scss';
import SeeMoreButton from '../../components/SeeMoreButton';
import BackToTopButton from '../../components/BackToTopButton';

const Home: React.FC = () => {
    const { books } = useSearch();

    return (
        <>
            <Search />
            <div className="home__container">
                {books && Object.keys(books)?.length === 0 && (
                    <strong>Seus resultados de busca aparecerão aqui</strong>
                )}

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
                    <SeeMoreButton />
                    <BackToTopButton />
                </>
            )}
        </>
    );
};

export default Home;
