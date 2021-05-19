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
                    <Card
                        key={book.id}
                        title={book.volumeInfo.title}
                        thumbnail={book.volumeInfo.imageLinks.thumbnail}
                    />
                ))}
            </div>
        </>
    );
};

export default Home;
