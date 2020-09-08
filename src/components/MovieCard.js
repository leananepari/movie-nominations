import React from 'react';
import { connect } from 'react-redux';
import { nominateMovie, removeFromNomination } from '../redux/actions';

const MovieCard = ( props ) => {

  const handleNominateMovie = () => {
    props.nominateMovie(props.movie)
  }

  const removeNomination = () => {
    props.removeFromNomination(props.movie)
  }

  return (
    <div className="movie-card-wrap">
      <img className="image" src={props.movie.Poster !== "N/A" ? props.movie.Poster : "http://placehold.it/200x200"} alt="movie-poster"/>
      <div className="right-side">
        <div className="title">{props.movie.Title}</div>
        <div className="year">{props.movie.Year}</div>
        {props.nominationsLookup.hasOwnProperty(props.movie['imdbID']) && props.nominationList ? 
        <button onClick={removeNomination} className="btn">Remove</button>
        :
        <button onClick={handleNominateMovie} 
                className="btn" 
                disabled={props.nominationsLookup[props.movie['imdbID']] || props.banner}>Nominate</button>
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    searchResult: state.searchResult,
    resultsList: state.resultsList,
    nominationsList: state.nominationsList,
    nominationsLookup: state.nominationsLookup,
    banner: state.banner
  }
};

export default connect (
  mapStateToProps,
  { nominateMovie, removeFromNomination }
)(MovieCard)