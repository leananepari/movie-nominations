import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getSearchResults } from '../redux/actions';

const SearchBar = ( props ) => {
  const [search, setSearch] = useState( { title: '' } )

  const handleChange = (event) => {
    setSearch({...search, [event.target.name]: event.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.getSearchResults(search)
  }

  return (
    <div className="search-bar">
      <h2>Movie title</h2>
      <form type="submit" onSubmit={handleSubmit}>
        <input 
          type="text"
          name="title"
          value={search.title}
          onChange={handleChange}
          placeholder="Search movie"
        />
      </form>
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
  { getSearchResults }
)(SearchBar)