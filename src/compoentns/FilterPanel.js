import React from 'react';

import '../styles/FilterPanel.css';


const FilterPanel = ({children}) => {
    return (
        <div className={'filter-panel'}>
            <div className={'filter-title'}>
                <p>Filters:</p>
                <button className={'clear-all-filters-button'}><i className={'fas fa-times'}/></button>
            </div>
            {children}
        </div>
    );
};

export default FilterPanel;
