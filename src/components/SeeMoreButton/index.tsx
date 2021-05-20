import React from 'react';
import Loader from 'react-loader-spinner';
import { useSearch } from '../../hooks/search';

import './styles.scss';

const SeeMoreButton: React.FC = () => {
    const { nextPage, loading } = useSearch();
    return (
        <button
            type="button"
            onClick={() => nextPage()}
            className="see-more-button__container"
        >
            {loading ? (
                <Loader
                    type="ThreeDots"
                    color="#e5e5e5"
                    height={30}
                    width={30}
                />
            ) : (
                <strong>Ver mais</strong>
            )}
        </button>
    );
};

export default SeeMoreButton;
