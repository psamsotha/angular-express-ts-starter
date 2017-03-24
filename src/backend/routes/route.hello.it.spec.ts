import * as express from 'express';
import * as request from 'supertest';

import { expect } from 'chai';
import { Response } from 'supertest';
import { Server } from 'backend/server';


describe('routes:integration', () => {
	describe('HelloRoutes', () => {

		function app() {
			return new Server(express())
			  .disableLogging()
				.configure();
		}

		describe('GET /hello', () => {
			it('should return hello json', (done) => {
				request(app())
					.get('/api/hello')
					.expect(200)
					.expect((res: Response) => {
						const body = res.body;

						expect(body).to.eql({message: 'Hello World'});
					})
					.end((error: any, res: Response) => {
						if (error) return done(error)
						return done();
					});
			});
		});
	});
});
