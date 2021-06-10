import { call, put } from "redux-saga/effects";
import * as Actions from "../Character/reducer";

export function * getCharacters(api){

    let url = `https://swapi.dev/api/people/?page=1`

    try {
        const response = yield call(api.get, url);
        yield put(Actions.showCharacters(response.data));        
    } catch (e) {
        e.response ? console.log(e.response.data) : e.message;
    }
}