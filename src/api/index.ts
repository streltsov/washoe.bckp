import { combineRoutes } from '@marblejs/core';
import { signup$ } from "./signup";
import { word$ } from "./word";

export const api$ = combineRoutes('/api/v1', [
  signup$,
  word$
]);
