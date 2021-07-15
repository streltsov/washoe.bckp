import { wordPropertyToLowerCase, addCreatedAtProp, addZeroStageProp, addInititalNotifyAtProp, createResponseOnWordCreated } from './utils'
import { HttpError, HttpStatus, HttpEffect, use, r } from '@marblejs/core';
import { tap, map, switchMap, catchError } from 'rxjs/operators';
import { WordModel as Word } from '../model/words.dao';
import { wordValidator$ } from '../validators';
import { throwError } from 'rxjs';
import R from 'ramda';


const createWordEffect$: HttpEffect = req$ =>
  req$.pipe(
    // TODO make server continue to work if validation fails
    use(wordValidator$),
    map(R.prop('body')),
    tap(console.log),
    map(wordPropertyToLowerCase),
    map(addCreatedAtProp),
    map(addZeroStageProp),
    map(addInititalNotifyAtProp),
    switchMap(wordData => Word.create(wordData)),
    map(createResponseOnWordCreated),
    map(R.objOf('body')),
    catchError(() => throwError(
      new HttpError('Bad Request', HttpStatus.BAD_REQUEST)
    )),
  )


export const createWord$ = r.pipe(
  r.matchPath('/create'),
  r.matchType('POST'),
  r.useEffect(createWordEffect$)
);
