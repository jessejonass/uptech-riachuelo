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
                {books.map(book => (
                    <Card key={book.id} book={book.volumeInfo} />
                ))}
            </div>
        </>
    );
};

export default Home;
