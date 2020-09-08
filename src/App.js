import React from 'react';
import '../src/css/styles.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ResultsList from './components/ResultsList';
import NominationsList from './components/NominationsList';
import Banner from './components/Banner';

function App() {
  
  return (
    <div className="app">
      <div className="wrap">
        <Header />
        <SearchBar />
        <Banner />
        <div className="movie-list-wrap" >
          <ResultsList />
          <NominationsList />
        </div>
      </div>
    </div>
  );
}

export default App
