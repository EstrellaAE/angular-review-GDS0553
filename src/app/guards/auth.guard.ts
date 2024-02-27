<<<<<<< HEAD
import { CanActivateFn, Router } from '@angular/router';
import { Inject, inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  if(sessionStorage.getItem('email')){
    return true
  }else{
    const router = inject(Router);
    return router.navigate(['login']);
  }
=======
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
>>>>>>> 6aa91eeaef74d443e02809e86717e73bd334ec34
};
