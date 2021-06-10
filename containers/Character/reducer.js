import { createAction, handleActions } from "redux-actions";

const initialState = {
    characters : {results: []},
    isLoading: false
}

export const REQUEST_CHARACTERS = 'character/REQUEST_CHARACTERS';
export const SHOW_CHARACTERS = 'character/SHOW_CHARACTERS';

export const getCharacters = createAction(REQUEST_CHARACTERS);
export const showCharacters = createAction(SHOW_CHARACTERS);


const characterReducer = handleActions({
    [getCharacters] : state => ({ ...state, isLoading: true }),
    [showCharacters] : (state, {payload}) => ({...state, characters: payload, isLoading: false})
}, initialState);

export default characterReducer