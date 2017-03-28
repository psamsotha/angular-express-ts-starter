import { Observable } from 'rxjs/Observable';


export interface Selector<T, U> {
	(obs: Observable<T>): Observable<U>;
}
