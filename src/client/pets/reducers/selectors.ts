import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

import { PetsState } from './pet.reducer';
import { AppState } from 'client/app';
import { Selector } from 'client/core';


export function getPets(): Selector<AppState, PetsState> {
	return state$ => state$
		.map(state => state.pets)
		.distinctUntilChanged();
}

