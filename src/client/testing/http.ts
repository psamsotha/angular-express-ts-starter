import { NgModule } from '@angular/core';
import { HttpModule, Http, RequestOptions, BaseRequestOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';


export function httpFactory(backend: XHRBackend, options: BaseRequestOptions): Http {
	return new Http(backend, options);
}


@NgModule({
	imports: [HttpModule],
	providers: [
		MockBackend,
		BaseRequestOptions,
		{
			provide: Http,
			deps: [MockBackend, BaseRequestOptions],
			useFactory: httpFactory
		}
	]
})
export class HttpTestingModule {}
