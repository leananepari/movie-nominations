import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNominationsList } from '../redux/actions';
import MovieCard from './MovieCard';

const NominationsList = ( props ) => {

  useEffect(() => {
    props.getNominationsList()    
  }, [])

  return (
    <div className="movie-title-wrap">
      <h2>Nominations List</h2>
      <div className="movie-list">
        {props.nominationsList.map((movie) => {
          return <MovieCard movie={movie} key={movie.imdbID} nominationList={true}/> 
        })}
      </div>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    searchResult: state.searchResult,
    resultsList: state.resultsList,
    nominationsList: state.nominationsList
  }
};

export default connect (
  mapStateToProps,
  { getNominationsList }
)(NominationsList)