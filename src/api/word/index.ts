import { combineRoutes } from '@marblejs/core';
import { createWord$ } from './createWord';

export const word$ = combineRoutes('/word', {
    effects: [createWord$],
    // middlewares: [authorize$],
  })