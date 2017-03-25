import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloModule } from 'client/hello';


@NgModule({
	imports: [
		HttpModule,
		BrowserModule,

		HelloModule.forRoot()
	],
	declarations: [
		AppComponent
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
