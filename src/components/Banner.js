import React from 'react';
import { connect } from 'react-redux';

const Banner = ( props ) => {

  return (
    <div className="banner" style={{color: `${props.banner ? 'gray' : 'transparent'}`, 
                                    backgroundColor: `${props.banner ? '#a6e2a6' : 'transparent'}`}}>
      You selected 5 movies!
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
  {}
)(Banner)