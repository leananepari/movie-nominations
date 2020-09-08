
const initialState = {
  searchResult: '',
  resultsList: [],
  nominationsList: [],
  nominationsLookup: {},
  banner: false

}

export const reducer = (state = initialState, action) => {
  
  switch (action.type) {

    case 'GET_SEARCH_RESULTS_START':
      return {
        ...state,
      };
    
    case 'GET_SEARCH_RESULTS_SUCCESS':
      return {
        ...state,
        resultsList: action.list,
        searchResult: action.search
      };
    
    case 'GET_SEARCH_RESULTS_FAILURE':
      return {
        ...state      
      };
    
    case 'NOMINATE_MOVIE':
      // copy nominations list and add a new nomination to the beginning of the list
      let nominations_arr = [...state.nominationsList];
      nominations_arr.unshift(action.payload);
      // copy lookup table, add a new item to it, and set it to localstorage
      let lookup = {...state.nominationsLookup};
      lookup[action.payload['imdbID']] = action.payload;
      localStorage.setItem('nominations', JSON.stringify(lookup));

      return {
        ...state,
        nominationsList: nominations_arr,
        nominationsLookup: lookup,
        banner: state.nominationsList.length === 5 ? true : false
      }
    
    case 'REMOVE_FROM_NOMINATION':
      let updated = {...state.nominationsLookup};
      delete updated[action.payload['imdbID']];
      localStorage.setItem('nominations', JSON.stringify(updated));

      return {
        ...state,
        nominationsLookup: updated,
        nominationsList: state.nominationsList.filter(item => item['imdbID'] !== action.payload['imdbID']),
        banner: state.nominationsList.lenght === 5 ? true : false
      }

    case 'GET_NOMINATIONS_LIST':
      let savedList = JSON.parse(localStorage.getItem('nominations'));
      if (savedList === null) {
        localStorage.setItem('nominations', JSON.stringify({}))
      }
      let l = [];
      for (let key in savedList) {
        l.push(savedList[key]);
      }

      return {
        ...state,
        nominationsList: l,
        nominationsLookup: savedList === null ? {} : savedList,
        banner: l.length === 5 ? true : false
      }

    default:
      return state;
  }

}

