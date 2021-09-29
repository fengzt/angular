// a-guard-can-activate

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { USER_LOGIN } from '../Shared/Util/setting';

// import isLoginGuard ở Users.module.ts - khi tạo route

@Injectable({ providedIn: 'root' })
export class isLoginGuard implements CanActivate {
  // router: biến chuyển hướng trang
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem(USER_LOGIN)) {
        
    //   this.router.navigate(['/users/profile']);

      return true;
    }
    alert('Bạn cần đăng nhập để vào trang này !');

    // navigate: dùng để chuyển hướng trang, khi login fail -> về login
    // this.router.navigate(['/users/login']);
    this.router.navigate(['/login']);
    

    // true là vào được, false là không vào được -> canActivate: false
    return false;
  }
}
