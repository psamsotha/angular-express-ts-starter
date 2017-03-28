import { Component, Input, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';
import { Pet } from '../model/pet';


@Component({
	selector: 'pet-detail',
	template: `
		<div class="card card-shadow pet-detail">
			<img class="card-img-top" [src]="'http://lorempixel.com/400/400/cats/' + pet.id" alt="pet image">
			<div class="card-block">
				<h4 class="card-title">{{ pet.name }}</h4>
				<p class="card-text"><b>dob: </b>{{ pet.dateOfBirth | date:'longDate'}}</p>
			</div>
		</div>
	`,
	styleUrls: ['./pet-detail.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None
})
export class PetDetailComponent {
	@Input() pet: Pet;
}
