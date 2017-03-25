import { NgModule, ModuleWithProviders } from '@angular/core';
import { HelloService } from './hello.service';


export { HelloService };
export { Hello } from './hello';


@NgModule({})
export class HelloModule {
	static forRoot(): ModuleWithProviders {
		return {
			ngModule: HelloModule,
			providers: [
				HelloService
			]
		}
	}
}
