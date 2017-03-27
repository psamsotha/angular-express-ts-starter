import { Request, Response, NextFunction } from 'express';
import { Controller, Get, Post, Put } from 'inversify-express-utils';
import { PetRepository } from './pet.repository';
import { injectable } from 'inversify';


@injectable()
@Controller('/pets')
export class PetController {

	constructor(private repo: PetRepository) {}

  @Get('/:id')
	getById(req: Request, res: Response, next: NextFunction) {
		const id = req['id'];
		this.repo.findOne(id).then(pet => {
			res.json(pet);
		});
	}
}
