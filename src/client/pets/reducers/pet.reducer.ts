import { Map } from 'immutable';
import { PetActions } from '../pet.actions';
import { Action, ActionReducer } from '@ngrx/store';
import { PetData, Pet, createPet } from '../model/pet';


export type PetsState = Map<any, any>;

const initialState = Map<any, any>({
	isFetching: false,
	entities: Map<string, Pet>()
});


export function petsReducer(state = initialState, {type, payload}: Action): PetsState {
	switch (type) {

		case PetActions.FETCH_PETS_SUCCESS:
			const { data } = payload;

			return state.withMutations(petsState => {
				data.forEach((pet: PetData) => {
					petsState.mergeIn(['entities'], { [`${pet.id}`] : createPet(pet)});
				});
			});

    case PetActions.FETCH_PETS: 
			return state.set('isFetching', true);

		case PetActions.FETCH_PETS_FAILED: 
			return state.set('isFetching', false)

		default:
			return state;
	}
};
