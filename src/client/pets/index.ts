import { NgModule, ModuleWithProviders } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from 'client/shared';

import { PetActions } from './pet.actions';
import { PetEffects } from './pet.effects';
import { PetService } from './pet.service';
import { PetListComponent } from './components/pet-list.component';
import { PetDetailComponent } from './components/pet-detail.component';


export { PetActions, PetService };

export { Pet, PetData, PetRecord, createPet } from './model/pet';
export { PetsState, petsReducer } from './reducers/pet.reducer';



@NgModule({
	imports: [
		SharedModule,
		EffectsModule.run(PetEffects)
	],
	declarations: [
		PetListComponent,
		PetDetailComponent
	],
	exports: [
		PetListComponent,
		PetDetailComponent
	]
})
export class PetsModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: PetsModule,
			providers: [
				PetActions,
				PetService
			]
		}
	}
}
