import { requestValidator$, t } from '@marblejs/middleware-io';

// TODO forbid extra fields
export const wordValidator$ = requestValidator$({
  body: t.type({
    word: t.string,
  }),
});