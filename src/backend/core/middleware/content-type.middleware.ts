
import { ErrorMessage } from 'common';
import { RequestHandler, Request, Response, NextFunction } from 'express';


export const contentTypeHandler = (): RequestHandler => {
	return (req: Request, res: Response, next: NextFunction) => {
		if (req.method.toLowerCase() === 'post' || req.method.toLowerCase() === 'put') {
			if (!req.header('content-type')) {
				return res.status(400).json(new ErrorMessage(400, 'expected Content-Type header'));
			}

			if (req.header('content-type').indexOf('application/json') == -1) {
				return res.status(415).json(new ErrorMessage(415, 'only application/json data allowed'));
			}
		}
		return next();
	}
};
