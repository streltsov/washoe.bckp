import { combineRoutes } from '@marblejs/core';
import { signup$ } from './signup';

export const user$ = combineRoutes('/user', {
    effects: [signup$],
    // middlewares: [authorize$],
  })
