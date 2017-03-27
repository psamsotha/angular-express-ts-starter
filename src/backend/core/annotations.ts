import { Type } from './type';


export interface ServerModuleMetadata {
	controllers?: Type<any>[]
	services?: Type<any>[]
}


export function ServerModule(metadata: ServerModuleMetadata) {
	return function(ctor: Function) {
		Reflect.defineMetadata('server-module-metadata', metadata, ctor);
	}
}

