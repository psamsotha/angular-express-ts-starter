import { injectable } from 'inversify';
import { Pet } from './pet.entity';


@injectable()
export class PetRepository {

	findOne(id: number): Promise<Pet> {
		return Promise.resolve({
			id,
			name: 'Fluffy',
			dateOfBirth: new Date(),
			type: 'Dog'
		});
	}
}


