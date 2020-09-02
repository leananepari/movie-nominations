import React, { useState, useEffect } from 'react';
import '../src/css/styles.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import NominationsList from './components/NominationsList';

function App() {
  const [results, setResults] = useState([]);
  const [nominations, setNominations] = useState([]);

  useEffect(() => {

  }, [])

  return (
    <div className="app">
      <Header />
      <SearchBar />
      <div className="movie-list-wrap" >
        <ResultsList />
        <NominationsList />
      </div>
    </div>
  );
}

export default App;
