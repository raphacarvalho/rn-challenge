import { createAction, handleActions } from "redux-actions";

const initialState = {
    characters : {results: []},
    characterSelected: {filmsFetched: []},
    isLoading: false,
    favorites: [],
}

export const REQUEST_CHARACTERS_LIST = 'character/REQUEST_CHARACTERS_LIST';
export const SET_CHARACTERS_LIST = 'character/SET_CHARACTERS_LIST';
export const CLEAR_CHARACTERS_LIST = 'character/CLEAR_CHARACTERS_LIST';
 

export const REQUEST_CHARACTER = 'character/REQUEST__CHARACTER';
export const SET_CHARACTER = 'character/SET_CHARACTER';

export const getCharactersList = createAction(REQUEST_CHARACTERS_LIST, url => ({url}));
export const setCharactersList = createAction(SET_CHARACTERS_LIST);
export const clearCharactersList = createAction(CLEAR_CHARACTERS_LIST);

export const getCharacter = createAction(REQUEST_CHARACTER, url => ({url}));
export const setCharacter = createAction(SET_CHARACTER);

const characterReducer = handleActions({
    [getCharactersList] : state => ({ ...state, isLoading: true }),
    [setCharactersList] : (state, {payload}) => {
        console.log('buscou');
    return ({...state, characters: {...payload, results: [...state.characters.results, ...payload.results]}, isLoading: false})
    },        
    [clearCharactersList] : state => ({ ...state, characters: {results:[]}}),
    [getCharacter] : state => ({...state, characterSelected:{}, isLoading: true}),
    [setCharacter] : (state, {payload}) => ({...state, characterSelected: payload, isLoading: false}) 
}, initialState);

export default characterReducer;