import { HttpError, HttpStatus, HttpEffect, use } from '@marblejs/core';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserModel as User } from '../model/users.dao';
import { signupValidator$ } from '../validators';
import { r } from '@marblejs/core';
import { throwError } from 'rxjs';

const signupEffect$: HttpEffect = req$ =>
  req$.pipe(
    use(signupValidator$),
    map(({ body }) =>  body),
    switchMap(user => User.create(user)),
    map(response => ({ body: response })),
    catchError(() => throwError(
      new HttpError('Bad Request', HttpStatus.BAD_REQUEST)
    )),
)


export const signup$ = r.pipe(
  r.matchPath('/signup'),
  r.matchType('POST'),
  r.useEffect(signupEffect$)
);
