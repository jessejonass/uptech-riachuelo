import React from 'react';

import { Container, Header } from './styles';

import books from '../../assets/books.svg';

const Home: React.FC = () => {
    return (
        <Container>
            <Header>
                <div>
                    <h1>
                        Bem vindx ao <br /> Book+
                    </h1>

                    <input type="text" />
                </div>

                <img src={books} alt="Books" />
            </Header>
        </Container>
    );
};

export default Home;
