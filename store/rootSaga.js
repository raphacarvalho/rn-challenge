import { takeLatest, all } from 'redux-saga/effects';
import Api from '../api';

import * as Character from '../containers/Character/saga';
import * as CharacterTypes from '../containers/Character/reducer';

const api = Api.create();

export default function * root() {
    yield all([
        takeLatest(CharacterTypes.REQUEST_CHARACTERS, Character.getCharacters, api)
    ])
}