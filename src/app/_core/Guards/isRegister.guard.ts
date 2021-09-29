// a-guard-can-deactivate
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// Component nào muốn deactivate
import { RegisterComponent } from 'src/app/Pages/Users/Register.component';



// Consider using this interface for all CanDeactivate guards,
// and have your components implement this interface, too.
//
//   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
//
// export interface CanComponentDeactivate {
// canDeactivate: () => any;
// }

@Injectable({providedIn: 'root'})
export class isRegisterGuard implements CanDeactivate<RegisterComponent> {
    canDeactivate(
        component: RegisterComponent,
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        
        // Để cản người dùng khi chưa hoàn thành form - CHƯA SUBMIT
        // Gồm: chưa điền || đang điền || đã điền
        if (component.isRegister) {
            return true;
        }

        // Hiện ra hộp thoại control -> cho người dùng chọn Yes or No
        //  Nếu Yes (true) -> chuyển đi, No (false) -> tiếp tục điền form
        if (confirm('Bạn chưa nhập dữ liệu hoàn tất? Bạn vẫn tiếp tục rời khỏi trang?')) {
            return true;
        }

        return false;
    }
}