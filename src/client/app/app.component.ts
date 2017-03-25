import { Component, OnInit } from '@angular/core';
import { HelloService, Hello } from 'client/hello';


@Component({
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	message = 'Loading message...';


	constructor(private service: HelloService) {}


	ngOnInit() {
		this.service.getHelloMessage().subscribe((hello: Hello) => {
			this.message = hello.message;
		});
	}
}
