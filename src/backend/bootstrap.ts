import * as express from 'express';

import { Server } from './server';


const app = express();

new Server(app).configure();


app.listen(app.get('port'), () => {
	console.log(`hello server running on port ${app.get('port')}`);
});

