import { Express } from 'express';
import { HelloRoutes } from './route.hello';


export class Routes {

	static configure(app: Express): void {

    const helloRoutes = new HelloRoutes();
		app.get('/api/hello', helloRoutes.getHello);
	}
}

