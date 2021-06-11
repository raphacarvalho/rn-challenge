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
        const response = yield call(api.get, url);
        yield put(Actions.setCharactersList(response.data));   

    } catch (e) {
        e.response ? console.log(e.response.data) : e.message;
    }
}

export function * getCharacter(api, {payload}){
    try {
        
        const response = yield call(api.get, payload.url);
        yield put(Actions.setCharacter(response.data));   

    } catch (e) {
        e.response ? console.log(e.response.data) : e.message;
    }
}