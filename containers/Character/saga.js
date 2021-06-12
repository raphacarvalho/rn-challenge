import { call, put } from "redux-saga/effects";
import * as Actions from "../Character/reducer";

export function * getCharactersList(api, {payload}){
    let urlBase = `https://swapi.dev/api/people/?page=1`

    let {url} = payload;
 
    try {
        if(!url){
            yield put(Actions.clearCharactersList()); 
            url = urlBase;
        } 
        const {data} = yield call(api.get, url);
        yield put(Actions.setCharactersList(data));   

    } catch (e) {
        e.response ? console.log(e.response.data) : e.message;
    }
}

export function * getCharacter(api, {payload}){
    try {
        
        const {data} = yield call(api.get, payload.url);
        yield put(Actions.setCharacter(data));   

    } catch (e) {
        e.response ? console.log(e.response.data) : e.message;
    }
}

export function * getFilm(api, {payload}){
    try {
        
        const {data} = yield call(api.get, payload.url);
        yield put(Actions.setFilm(data));   

    } catch (e) {
        e.response ? console.log(e.response.data) : e.message;
    }
}