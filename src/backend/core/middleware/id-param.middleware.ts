
import { ErrorMessage } from 'common';
import { RequestParamHandler, Request, Response, NextFunction } from 'express';


export const idParamHandler = (): RequestParamHandler => {
	return (req: Request, res: Response, next: NextFunction, id: string) => {

		const parsed = parseInt(id);
		if (isNaN(parsed)) {
			res.status(404).json(new ErrorMessage(404, 'id parameter must be a number'));
			return next();
		}
		req['id'] = parsed;
		return next();
	}
};
