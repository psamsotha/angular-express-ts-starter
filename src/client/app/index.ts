import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SharedModule } from 'client/shared';
import { PetsModule } from 'client/pets';

import { petsReducer } from 'client/pets';


export { AppState } from './app.state';



@NgModule({
	imports: [
		HttpModule,
		BrowserModule,

    SharedModule,
		PetsModule.forRoot(),
		StoreModule.provideStore({
			pets: petsReducer
		})
	],
	declarations: [
		AppComponent
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
