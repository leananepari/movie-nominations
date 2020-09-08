import React from 'react';
import { connect } from 'react-redux';
import { getSearchResults } from '../redux/actions';
import MovieCard from './MovieCard';

const ResultsList = ( props ) => {

  return (
    <div className="movie-title-wrap">
      <div>
        <h2>Results for {props.searchResult.length > 0 ? '"'+props.searchResult+'"' : '...'}</h2>
      </div>
      <div className="movie-list" style={{marginRight: '10px'}}>
        {props.resultsList !== undefined ? 
          props.resultsList.map((movie) => {
            return <MovieCard key={movie.imdbID} movie={movie} nominationList={false}/>
          })
        :
        <div style={{margin: '5px 0 0 5px'}}>No results</div>}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    searchResult: state.searchResult,
    resultsList: state.resultsList,
    nominationsList: state.nominationsList,
  }
};

export default connect (
  mapStateToProps,
  { getSearchResults }
)(ResultsList)