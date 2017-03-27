import { PageRequest, Page } from './paging';


export interface Repository<T> {
  findAll(request: PageRequest): Page<T>;
  findOne(id: number): T;
  create(t: T): T;
  update(t: T): T;
}
