import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (_route, state) => {
  const router = inject(Router);

  if (localStorage['token']) {

    if (state.url === '/login') {
      router.navigate(['/customer']);
    }
    return true;
  } else if (state.url !== '/login') {
    router.navigate(['/login']);
    return false;

  } else {
    return true;
  }
};