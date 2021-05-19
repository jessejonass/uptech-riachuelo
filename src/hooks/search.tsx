import React, {
    useState,
    useCallback,
    useContext,
    createContext,
    useEffect,
} from 'react';

// https://www.googleapis.com/books/v1/volumes?q=search+terms

interface Book {
    id: string;
    volumeInfo: {
        title: string;
    };
}

interface SearchContext {
    books: Book[];
    searchBooks(therm: string): void;
    loading: boolean;
}

const SearchContext = createContext<SearchContext | null>(null);

const SearchProvider: React.FC = ({ children }) => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);

    const searchBooks = useCallback(async therm => {
        setLoading(true);
        await fetch(
            `https://www.googleapis.com/books/v1/volumes?q=search+${therm}`,
        )
            .then(response => response.json())
            .then(data => {
                setBooks(data.items);
                setLoading(false);
            });
    }, []);

    const value = React.useMemo(
        () => ({ searchBooks, books, loading }),
        [searchBooks, books, loading],
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
