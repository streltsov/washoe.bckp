import { requestValidator$, t } from '@marblejs/middleware-io';

// TODO forbid extra fields
export const userValidator$ = requestValidator$({
  body: t.type({
    email: t.string,
    password: t.string
  })
});
