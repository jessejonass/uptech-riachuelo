import React, {
    useState,
    useCallback,
    useContext,
    createContext,
    useEffect,
} from 'react';

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
        language: string;
        previewLink: string;
    };
}

interface FavoriteContext {
    favorites: Book[];
    addFavorite(fav: Book): void;
    removeFavorite(fav: Book): void;
    clearFavorites(): void;
}

const FavoriteContext = createContext<FavoriteContext | null>(null);

const FavoriteProvider: React.FC = ({ children }) => {
    const [favorites, setFavorites] = useState<Book[]>([]);

    // verifica se tem livros salvos e seta a variavel favorites
    useEffect(() => {
        function loadFavorites(): void {
            const storagedFavorites = localStorage.getItem('@books+:favorites');
            if (storagedFavorites) {
                setFavorites([...JSON.parse(storagedFavorites)]);
            }
        }
        loadFavorites();
    }, []);

    const removeFavorite = useCallback(
        (fav: Book) => {
            const favoritsWithoutRemoved = favorites.filter(
                f => f.id === fav.id,
            );
        },
        [favorites],
    );

    const addFavorite = useCallback(
        (fav: Book) => {
            console.log(fav);
            localStorage.setItem(
                '@books+:favorites',
                JSON.stringify([...favorites, { ...fav }]),
            );
            setFavorites([...favorites, { ...fav }]);
        },
        [favorites],
    );

    const clearFavorites = useCallback(() => {
        setFavorites([]);
        localStorage.setItem('@books+:favorites', '');
    }, [favorites]);

    const value = React.useMemo(
        () => ({ favorites, addFavorite, removeFavorite, clearFavorites }),
        [favorites, addFavorite, removeFavorite, clearFavorites],
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
