import axios from 'axios';

export const getSearchResults = ( search ) => {
  return dispatch => {
    dispatch({ type: 'GET_SEARCH_RESULTS_START' });

    axios.get(`http://www.omdbapi.com/?s=${search.title}&type=movie&apikey=${process.env.REACT_APP_API_KEY}`)
      .then(response => { 
        dispatch({ type: 'GET_SEARCH_RESULTS_SUCCESS', list: response.data.Search, search: search.title })
      })
      .catch(error => {
        dispatch({ type: 'GET_SEARCH_RESULTS_FAILURE', payload: error })
      });
  }
}

export const nominateMovie = (movie) => {
  return { type: 'NOMINATE_MOVIE', payload: movie }
}

export const removeFromNomination = (movie) => {
  return { type: 'REMOVE_FROM_NOMINATION', payload: movie }
}

export const getNominationsList = () => {
  return { type: 'GET_NOMINATIONS_LIST' }
}