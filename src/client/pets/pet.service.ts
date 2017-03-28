import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';

import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BASE_API_URL } from 'client/constants';
import { PetData } from './model/pet';
import { getPets} from './reducers/selectors';
import { PetsState } from './reducers/pet.reducer';
import { AppState } from 'client/app';
import { PetActions } from './pet.actions';


@Injectable()
export class PetService {
	pets$: Observable<any>;
	fetching$: Observable<boolean>;

	constructor(private http: Http,
	            private store$: Store<AppState>,
							private actions: PetActions) {

		this.pets$ = store$.let(getPets())
			.map(pets => pets.get('entities').values());
		this.fetching$ = store$.let(getPets())
			.map(pets => pets.get('isFetching'))
	}


	fetchAll(): Observable<PetData[]> {
		return this.http.get(`${BASE_API_URL}/pets`)
			.map(res => { console.log(res); return res.json() as PetData[] });
	}

	loadPets(): void {
		this.store$.dispatch(this.actions.fetchPets());
	}
}
