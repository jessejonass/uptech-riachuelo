import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Back from '../../components/Back';

import './styles.scss';

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

interface RouterProps {
    id: string;
}

type DetailsProps = RouteComponentProps<RouterProps>;

const Details: React.FC<DetailsProps> = ({ match }) => {
    const [book, setBook] = useState<Book>({} as Book);
    const [loading, setLoading] = useState(false);

    const { id } = match.params;

    useEffect(() => {
        async function loadBook() {
            setLoading(true);
            await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=search+${id}`,
                // GET https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=yourAPIKey
            )
                .then(response => response.json())
                .then(data => {
                    setBook(data.items);
                    setLoading(false);
                });
        }
        loadBook();
    }, [id]);

    return (
        <div className="details__container">
            <Back />
            <h1>Detalhes</h1>
        </div>
    );
};

export default Details;
