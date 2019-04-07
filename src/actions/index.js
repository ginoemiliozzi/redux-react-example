import { ADD_ARTICLE, DELETE_ARTICLE } from '../constants/index';

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
};

export function deleteArticle(payload) {
    return { type: DELETE_ARTICLE, payload }
};

export function getData() {
    return (dispatch) =>{
        return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "DATA_LOADED", payload: json });
        });
    }
};
