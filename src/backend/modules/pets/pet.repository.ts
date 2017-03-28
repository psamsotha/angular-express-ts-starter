import { injectable } from 'inversify';
import { Pet } from './pet.entity';


@injectable()
export class PetRepository {

	findOne(id: number): Promise<Pet> {
		return Promise.resolve({
			id: id,
			name: 'Fluffy',
			dateOfBirth: new Date(),
			type: 'Cat'
		});
	}

	findAll(): Promise<Pet[]> {
		return Promise.resolve([
			{
				id: 1,
				name: 'Sleepy',
				dateOfBirth: new Date(),
				type: 'Cat'
			},
			{
				id: 4,
				name: 'Grumpy',
				dateOfBirth: new Date(),
				type: 'Cat'
			},
			{
				id: 5,
				name: 'Dopey',
				dateOfBirth: new Date(),
				type: 'Cat'
			}
		])
	}
}


