import React from 'react';
import Search from '../../components/Search';

const Home: React.FC = () => {
    return (
        <>
            <Search />
            <div className="home__container">
                <h1>Home</h1>
            </div>
        </>
    );
};

export default Home;
