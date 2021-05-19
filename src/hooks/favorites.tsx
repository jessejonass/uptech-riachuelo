import React, { useState, useCallback, useContext, createContext } from 'react';

interface Book {
    id: string;
    volumeInfo: {
        title: string;
        description: string;
        imageLinks: {
            thumbnail: string;
        };
    };
}

interface FavoriteContext {
    favorites: Book[];
    addFavorite(): void;
    removeFavorite(): void;
}

const FavoriteContext = createContext<FavoriteContext | null>(null);

const FavoriteProvider: React.FC = ({ children }) => {
    const [favorites, setFavorites] = useState<Book[]>([]);

    const addFavorite = useCallback(() => {
        console.log('add fav');
    }, []);

    const removeFavorite = useCallback(() => {
        console.log('add fav');
    }, []);

    const value = React.useMemo(
        () => ({ favorites, addFavorite, removeFavorite }),
        [favorites, addFavorite, removeFavorite],
    );

    return (
        <FavoriteContext.Provider value={value}>
            {children}
        </FavoriteContext.Provider>
    );
};

function useFavorite(): FavoriteContext {
    const context = useContext(FavoriteContext);

    if (!context) {
        throw new Error('useFavorite must be used within FavoriteProvider');
    }

    return context;
}

export { FavoriteProvider, useFavorite };
