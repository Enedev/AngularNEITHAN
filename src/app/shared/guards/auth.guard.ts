import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  //console.log(route);
  //console.log(state);

  const authService = inject(AuthService);
  const router = inject(Router);

  if(authService.isSignedUser()){
    return true;
  }
  sessionStorage.setItem('redirecTo', state.url);
  router.navigateByUrl('');
  return false;
};