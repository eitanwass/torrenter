import React from 'react';
import {useState} from 'react';

import {searchApiUrl, cors_api_url} from '../Consts';

import '../styles/SearchBar.css';

const SearchBar = ({onRequestSearchReceivedCallback, setLoading}) => {
    const [query, setQuery] = useState("");

    const requestSearchResults = () => {
        const url = new URL(searchApiUrl);
        url.searchParams.append('q', query);

        const api_fetch_promise = fetch(cors_api_url + url.href)
        setLoading(true);

        api_fetch_promise.then(res => res.json())
        .then(json => {
            setLoading(false);
            onRequestSearchReceivedCallback(json);
        })
        .catch(err => console.log(err));
    };
    

    return (
        <div className={'search-bar'}>
            <input type={'text'} 
            onChange={(e) => setQuery(e.target.value)} 
            onKeyDown={(e) => {if(e.key === 'Enter') requestSearchResults()}} />
            <button onClick={requestSearchResults}>
                <i className={'fas fa-search'}/>
            </button>
        </div>
    );
};

export default SearchBar;
