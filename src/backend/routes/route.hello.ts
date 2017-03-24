import { Request, Response, NextFunction } from 'express';


export class HelloRoutes {
	defaultMessage = 'Hello World';

	constructor() {
		this.getHello = this.getHello.bind(this);
	}

	getHello(req: Request, res: Response, next?: NextFunction) {
		return res
			.status(200)
			.json({ message: this.defaultMessage });
	}
}
