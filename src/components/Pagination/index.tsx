import React from 'react';
import { useSearch } from '../../hooks/search';

import './styles.scss';

const SeeMoreButton: React.FC = () => {
    const { nextPage, prevPage, disablePrevPage, disableNextPage } =
        useSearch();
    console.log(disablePrevPage);
    return (
        <div className="pagination__container">
            <button
                disabled={disablePrevPage}
                type="button"
                onClick={() => prevPage()}
                className="prev__button"
            >
                <strong>Anterior</strong>
            </button>

            <button
                disabled={disableNextPage}
                type="button"
                onClick={() => nextPage()}
                className="next__button"
            >
                <strong>Próximo</strong>
            </button>
        </div>
    );
};

export default SeeMoreButton;
