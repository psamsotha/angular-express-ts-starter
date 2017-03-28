import { Map, Record } from 'immutable';


export class PetData {
	id: number;
	name: string;
	type: string;
	dateOfBirth: string;
}

export interface Pet extends Map<string, any> {
	id: number;
	name: string;
	type: string;
	dateOfBirth: Date;
}


export const PetRecord = Record({
	id: -1,
	name: null,
	type: null,
	dateOfBirth: null
});


export function createPet(data: PetData): Pet {
	return new PetRecord({
		id: data.id,
		name: data.name,
		type: data.type,
		dateOfBirth: new Date(data.dateOfBirth)
	}) as Pet;
}
