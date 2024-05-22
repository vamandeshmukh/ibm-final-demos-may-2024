import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  console.log('loginGuard');

  const userService = inject(UserService);
  const router = inject(Router);

  if (userService.getLoginStatus()) {
    console.log('You are already logged in, redirecting to profile...');
    router.navigate(['/profile']);
    return false;
  }
  else {
    console.log('Not logged in');
    return true;

  }
};