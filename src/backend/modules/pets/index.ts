
import { ServerModule } from 'backend/core';
import { PetController } from './pet.controller';
import { PetRepository } from './pet.repository';


export { PetRepository };
export { Pet } from './pet.entity';


@ServerModule({
	controllers: [ PetController ],
	services: [ PetRepository ]
})
export class PetModule {}
