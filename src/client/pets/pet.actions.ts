import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { PetData } from './model/pet';


@Injectable()
export class PetActions {
	static readonly FETCH_PETS = 'FETCH_PETS';
	static readonly FETCH_PETS_SUCCESS = 'FETCH_PETS_SUCCESS';
	static readonly FETCH_PETS_FAILED = 'FETCH_PETS_FAILED';


	fetchPets(): Action {
		return {
			type: PetActions.FETCH_PETS
		};
	}

	fetchPetsSuccess(data: PetData[]): Action {
		return {
			type: PetActions.FETCH_PETS_SUCCESS,
			payload: { data }
		};
	}

	fetchPetsFailed(error: any): Action {
		return {
			type: PetActions.FETCH_PETS_FAILED,
			payload: error
		}
	}
}
