
import { ErrorTypes } from 'backend/core';
import { ErrorMessage } from 'common';
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';


export const errorHandler = (development: boolean = true): ErrorRequestHandler => {
  return (err: Error, req: Request, res: Response, next: NextFunction) => {

		if (development) {
			console.error(err);
		}

		if (typeof err['type'] !== 'undefined' && err['type'] === ErrorTypes.CLIENT_DATA_ERROR) {
			res.status(400).json(new ErrorMessage(400, err.message));
			return next();
		}
		res.status(500).json(new ErrorMessage(500, err.message));
		return next();
	}
};