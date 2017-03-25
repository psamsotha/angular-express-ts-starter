import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Hello } from './hello';
import { BASE_API_URL } from 'client/constants';


@Injectable()
export class HelloService {

	constructor(private http: Http) {}

	getHelloMessage() {
		return this.http.get(`${BASE_API_URL}/hello`)
			.map(res => res.json() as Hello)
	}
}
