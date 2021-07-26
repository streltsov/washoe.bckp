import { combineRoutes } from '@marblejs/core';
import { user$ } from "./user";
import { word$ } from "./word";

export const api$ = combineRoutes('/api/v1', [
  user$,
  word$
]);
