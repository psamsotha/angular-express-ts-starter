import { Component } from '@angular/core';
import { PetService } from 'client/pets';


@Component({
	selector: 'pet-list',
	template: `
		<div class="pet-list row">
			<pet-detail class="col-md-4" *ngFor="let pet of pets.pets$ | async" [pet]="pet">
			</pet-detail>
		</div>
	`,
	styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent {

	constructor(private pets: PetService) {
		pets.loadPets();
	}
}
