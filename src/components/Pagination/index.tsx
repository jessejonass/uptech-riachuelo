import React from 'react';
import { useSearch } from '../../hooks/search';

import './styles.scss';

const SeeMoreButton: React.FC = () => {
    const { nextPage, prevPage, disablePrevPage, disableNextPage } =
        useSearch();

    function scrollTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <div className="pagination__container">
            <button
                disabled={disablePrevPage}
                type="button"
                onClick={() => {
                    prevPage();
                    scrollTop();
                }}
                className="prev__button"
            >
                <strong>Anterior</strong>
            </button>

            <button
                disabled={disableNextPage}
                type="button"
                onClick={() => {
                    nextPage();
                    scrollTop();
                }}
                className="next__button"
            >
                <strong>Próximo</strong>
            </button>
        </div>
    );
};

export default SeeMoreButton;
