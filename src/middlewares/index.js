import { ADD_ARTICLE } from "../constants";

const forbiddenWords = ["spam", "money"];

const forbiddenWordsMiddleware = ({ dispatch }) => {
    return (next) => {
        return (action) => {
            if (action.type === ADD_ARTICLE) {
        
                const foundWord = forbiddenWords.filter(w => action.payload.title.includes(w)).length;

                if (foundWord) {
                  return dispatch({ type: "FOUND_BAD_WORD" });
                }
              }

            return next(action);
        }
    }
}

export {forbiddenWordsMiddleware};