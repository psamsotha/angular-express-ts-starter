import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

import { Store } from '@ngrx/store';
import { AppState } from 'client/app';
import { Injectable } from '@angular/core';
import { PetService } from './pet.service';
import { PetActions } from './pet.actions';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions } from '@ngrx/effects';


@Injectable()
export class PetEffects {

	constructor(private petActions: PetActions,
	            private petService: PetService,
							private store$: Store<AppState>,
							private actions$: Actions,) {}

	
	@Effect()
	fetchPets$ = this.actions$
		.ofType(PetActions.FETCH_PETS)
		.switchMap(({payload}) => this.petService.fetchAll()
			.map(data => this.petActions.fetchPetsSuccess(data))
			.catch(error => Observable.of(this.petActions.fetchPetsFailed(error))));	
}