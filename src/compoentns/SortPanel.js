import React from 'react';

import '../styles/SortPanel.css';

const SortPanel = ({results}) => {
    return (
        <div className={'sort-panel'}>
            <div className={'sort-by-label'}>
                Sort by:
            </div>

            <div className={'date-sort-label sort'}>
                Date
            </div>

            <div className={'size-sort-label sort'}>
                Size
            </div>

            <div className={'seeders-sort-label sort'}>
                Seeders
            </div>

            <div className={'leechers-sort-label sort'}>
                Leechers
            </div>

            <div className={'results-found-label'}>
                Results: {results} torrents
            </div>
        </div>
    );
};

export default SortPanel;
