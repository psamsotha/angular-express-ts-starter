import 'reflect-metadata';
import * as path from 'path';
import * as helmet from 'helmet';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import { Application } from 'express';

import { bootstrapServer } from './bootstrap';
import { paths } from './paths';
import { MODULES} from 'backend/modules/';
import { contentTypeHandler, idParamHandler, errorHandler } from 'backend/core';


const DEVELOPMENT = process.env.ENV.indexOf('dev') !== -1;
const TESTING = process.env.ENV.indexOf('test') !== -1;


const server = bootstrapServer(MODULES, '/api')
.setConfig((app) => {
	app.disable('x-powered-by');

	app.set('etag', 'strong');
	app.set('port', process.env.PORT || 3000);
	app.set('host', process.env.HOST || '0.0.0.0');

	app.use(helmet.hidePoweredBy());
	app.use(helmet.frameguard({ action: 'deny' }));
	app.use(helmet.hsts({	maxAge: 15552000 }));
	app.use(helmet.ieNoOpen());
	app.use(helmet.noSniff());
	app.use(helmet.xssFilter());
	
	app.use(bodyParser.json());
	app.use(compression());

	app.param('id', idParamHandler());
	app.use(contentTypeHandler());


	if (DEVELOPMENT) {
		app.set('json spaces', 2);
		app.use(require('morgan')('dev'));
	}

	app.get('/', (req, res) => {
		return res.sendFile(paths.index);
	});
	app.use(express.static(paths.static, { index: false }));
})
.setErrorConfig((app) => {
	app.use(errorHandler(DEVELOPMENT || TESTING));
})
.build();


export { server };
