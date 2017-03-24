import { expect } from 'chai';
import { spy, stub } from 'sinon';
import { HelloRoutes } from './route.hello';


describe('routes', () => {
	describe('HelloRoutes', () => {

		function setup() {
			const res = {
				json: stub().returnsThis(),
				status: stub().returnsThis()
			} as any;
			const req = {} as any;
			const routes = new HelloRoutes();

			return { req, res, routes };
		}

		describe('getHello', () => {
			it('should set status to 200', () => {
				const { req, res, routes } = setup();

				routes.getHello(req, res);

				expect(res.status.calledWith(200)).to.be.true;
			});

			it('should return hello world object', () => {
				const { req, res, routes } = setup();

				routes.getHello(req, res);

				expect(res.json.calledWith({message: 'Hello World'})).to.be.true;
			});
		});
	});
});
