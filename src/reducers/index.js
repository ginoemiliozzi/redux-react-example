import { ADD_ARTICLE, DATA_LOADED, FOUND_BAD_WORD, ERROR_BAD_WORD, DELETE_ARTICLE } from '../constants/index';

const initialState = {
    articles: [],
    remoteArticles: [],
    errors: []
  };
  const rootReducer = (state = initialState, action) => {

    switch(action.type){

      case ADD_ARTICLE:
        return Object.assign({}, state, {
          articles: state.articles.concat(action.payload),
          errors: state.errors.filter(e => e !== ERROR_BAD_WORD)
        });
      
      case DELETE_ARTICLE:
          return Object.assign({}, state, {articles: state.articles.filter(art => art !== action.payload)})
      
      case FOUND_BAD_WORD:
        return Object.assign({}, state, {
          errors: state.errors.concat(ERROR_BAD_WORD)
        });
        
      case DATA_LOADED: 
        return Object.assign({}, state, {
          remoteArticles: state.remoteArticles.concat(action.payload)
        });

      default: return state;
    }

  };
  export default rootReducer;