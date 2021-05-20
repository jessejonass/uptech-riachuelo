import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BrowserRouter } from 'react-router-dom';

import './styles/global.scss';

import Routes from './routes';
import AppProvider from './hooks';
import Header from './components/Header';

const App: React.FC = () => (
    <>
        <BrowserRouter>
            <AppProvider>
                <Header />
                <Routes />
            </AppProvider>
        </BrowserRouter>
    </>
);

export default App;
