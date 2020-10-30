import React from 'react';
import {useState, useEffect} from 'react';

import {filterPorn, filterByReliability} from './Filter';

import SearchBar from './compoentns/SearchBar';
import SearchResults from './compoentns/SearchResults';
import SortPanel from './compoentns/SortPanel';
import FilterPanel from './compoentns/FilterPanel';
import ToTopButton from './compoentns/ToTopButton';
import Collapsible from './compoentns/Collapsible';

import ReliabilityCollapsible from './compoentns/FilterCollapsibles/ReliabilityCollapsible';

import './styles/App.css';

const App = () => {
  const [loading, setLoading] = useState(false);

  const [originalResults, setOriginalResults] = useState([]);
  const [results, setResults] = useState([]);
  const [reliabilityFilter, setReliabilityFilter] = useState(['trusted', 'vip']);

  const [toTopVisible, setToTopVisible] = useState(false);

  window.onscroll = () => {
    setToTopVisible(window.scrollY > 150);
  };

  useEffect(() => {
    if (loading) {
      setOriginalResults([]);
      setResults([]);
    }
  }, [loading]);

  useEffect(() => {
    filterResults(originalResults);
  }, [reliabilityFilter]);

  const filterAndApplyResults = (results) => {
    setOriginalResults(results);

    filterResults(results);
  };

  const filterResults = (results) => {
    let filtered = [];
    filtered = results.filter(filterPorn);
    filtered = filtered.filter(filterByReliability(reliabilityFilter));

    setResults(filtered);
  };

  return (
    <div className="App">
      <header className="header">
        <SearchBar onRequestSearchReceivedCallback={filterAndApplyResults} setLoading={setLoading}/>
        <SortPanel results={results.length}/>
        <FilterPanel>
            <Collapsible title={'specific name'}>
                <p>test this is a long test to check if it works.</p>
            </Collapsible>
          <ReliabilityCollapsible reliability={reliabilityFilter} setReliability={setReliabilityFilter}/>
        </FilterPanel>
        {loading && <i className={'fas fa-compass loading'}/>}
        <SearchResults results={results}/>
        <ToTopButton visible={toTopVisible}/>
      </header>
    </div>
  );
}

export default App;
