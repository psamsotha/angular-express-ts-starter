import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Response, ResponseOptions } from '@angular/http';
import { MockConnection, MockBackend } from '@angular/http/testing';
import { HttpTestingModule } from 'client/testing';
import { HelloService } from './hello.service';


describe('hello', () => {
	describe('HelloService', () => {
		
		function setup() {
			const injector = TestBed.configureTestingModule({
				imports: [ HttpTestingModule ],
				providers: [
					HelloService
				]
			});

			const service: HelloService = injector.get(HelloService);
			const backend: MockBackend = injector.get(MockBackend);

			return { service, backend };
		}


		describe('getHelloMessage()', () => {
			it('should return an Observable with the hello message', fakeAsync(() => {
				const { backend, service } = setup();
				const data = {message: 'Hello World'};

				backend.connections.subscribe((conn: MockConnection) => {
					const url = conn.request.url;
					expect(url).toContain('/hello');

					const options = new ResponseOptions({ status: 200, body: JSON.stringify(data) });
					conn.mockRespond(new Response(options));
				});

        let result;
				service.getHelloMessage().subscribe(data => result = data);
				tick();

				expect(result).toEqual(data);
			}));
		});
	});
});
