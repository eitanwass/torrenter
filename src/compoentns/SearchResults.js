import React from 'react';

import SearchEntry from './SearchEntry';

import '../styles/SearchResults.css';



const SearchResults = ({results}) => {
    return (
        <div className={'search-results'}>
            {
                results.map((result) => {
                    return (
                            <SearchEntry key={result.id} name={result.name} id={result.id} seeders={result.seeders} leechers={result.leechers} added={result.added} size={result.size} num_files={result.num_files} info_hash={result.info_hash} username={result.username} status={result.status}/>
                    )
                })
            }
        </div>
    );
};

export default SearchResults;