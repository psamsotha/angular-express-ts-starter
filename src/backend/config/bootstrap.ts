import { Application } from 'express';
import { Container } from 'inversify';
import { TYPE, InversifyExpressServer } from 'inversify-express-utils';
import { Type, ServerModuleMetadata } from 'backend/core';


export function bootstrapServer(modules: Type<any>[], root?: string, container = new Container()): InversifyExpressServer {

	for (const mod of modules) {
		const metadata = Reflect.getMetadata('server-module-metadata', mod);
		if (!metadata) {
			throw new Error('modules must be annoated with @ServerModule');
		}

		const { controllers, services } = metadata;
		for (const controller of controllers) {
			container.bind(TYPE.Controller).to(controller);
		}
		for (const service of services) {
			container.bind(service).to(service);
		}
	}

	return new InversifyExpressServer(container, null, root && { rootPath: root });
}


