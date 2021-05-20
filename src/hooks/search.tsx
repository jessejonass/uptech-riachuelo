import React, { useState, useCallback, useContext, createContext } from 'react';
import { searchApi } from '../services/api';

interface Book {
    id: string;
    selfLink: string;
    volumeInfo: {
        title: string;
        subtitle?: string;
        imageLinks: {
            thumbnail: string;
            smallThumbnail: string;
        };
        publishedDate: string;
    };
}

interface SearchContext {
    searchBooks(term: string): void;
    books: Book[];
    loading: boolean;
    totalItems: number;
    nextPage(): void;
}

const SearchContext = createContext<SearchContext | null>(null);

const SearchProvider: React.FC = ({ children }) => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);
    const [startIndex, setStartIndex] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');

    const searchBooks = useCallback(async term => {
        setSearchTerm(term);
        setStartIndex(10);
        setLoading(true);
        await fetch(
            `${searchApi + term}&key=${
                process.env.REACT_APP_GOOGLE_API_KEY
            }&startIndex=0`,
        )
            .then(response => response.json())
            .then(data => {
                setTotalItems(data.totalItems);
                setBooks(data.items);
                setLoading(false);
            });
    }, []);

    const nextPage = useCallback(async () => {
        setLoading(true);
        setStartIndex(startIndex + 10);
        await fetch(
            `${searchApi + searchTerm}&key=${
                process.env.REACT_APP_GOOGLE_API_KEY
            }&startIndex=${startIndex}`,
        )
            .then(response => response.json())
            .then(data => {
                setBooks([...books, ...data.items]);
                setLoading(false);
            });
    }, [startIndex, books, searchTerm]);

    const value = React.useMemo(
        () => ({
            searchBooks,
            books,
            loading,
            totalItems,
            nextPage,
        }),
        [searchBooks, books, loading, totalItems, nextPage],
    );

    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
};

function useSearch(): SearchContext {
    const context = useContext(SearchContext);

    if (!context) {
        throw new Error('useSearch must be used within SearchProvider');
    }

    return context;
}

export { SearchProvider, useSearch };
