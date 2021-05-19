import React from 'react';
import Card from '../../components/Card';
import Search from '../../components/Search';
import { useSearch } from '../../hooks/search';

import './styles.scss';

const Home: React.FC = () => {
    const { books } = useSearch();

    return (
        <>
            <Search />
            <div className="home__container">
                {Object.keys(books).length === 0 && (
                    <strong>Seus resultados de busca aparecerão aqui</strong>
                )}

                {books.map(book => (
                    <Card
                        key={book.id}
                        id={book.id}
                        volumeInfo={book.volumeInfo}
                        selfLink={book.selfLink}
                    />
                ))}
            </div>
        </>
    );
};

export default Home;
