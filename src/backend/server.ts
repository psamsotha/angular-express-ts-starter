
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import { Express } from 'express';
import { Routes } from './routes';


const port = process.env.PORT || 3000;


export class Server {
	private _loggingDisabled = false;

	constructor(private app: Express) { }


	configure(): Express {
		this.configureProperties();
		this.configureMiddleware();
		this.configureRoutes();
		this.configureErrorHandling();

		return this.app;
	}

	private configureProperties(): void {
		this.app.set('json spaces', 2);
		this.app.set('etag', 'strong');
		this.app.set('port', port);
	}

	private configureMiddleware(): void {
		if (!this._loggingDisabled) {
			this.app.use(logger('common'));
		}
		
		this.app.use(bodyParser.json());
	}

	private configureRoutes(): void {
		Routes.configure(this.app);
	}

	private configureErrorHandling(): void {

	}

	disableLogging(): Server {
		this._loggingDisabled = true;
		return this;
	}
}
