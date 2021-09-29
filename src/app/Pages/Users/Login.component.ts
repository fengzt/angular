import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_core/Services/User.service';
import { ACCESS_TOKEN, USER_LOGIN } from 'src/app/_core/Shared/Util/setting';

@Component({
  selector: 'app-login',
  template: `
    <form
      #frmLogin="ngForm"
      (ngSubmit)="login(frmLogin.value)"
      class="container"
    >
      <h3>Login</h3>
      <div class="form-group">
        <p>username</p>
        <input class="form-control" name="taiKhoan" ngModel />
      </div>
      <div class="form-group">
        <p>password</p>
        <input class="form-control" name="matKhau" ngModel />
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-success">Login</button>
      </div>
    </form>
  `,
})
export class LoginComponent implements OnInit {
  constructor(private usService: UserService, private router: Router) {}

  login(values: any) {
    // call api
    console.log(values);

    this.usService.dangNhap(values).subscribe(
      (result) => {
        console.log(result);

        // Đăng nhập thành công => lưu vào localstorage
        localStorage.setItem(USER_LOGIN, JSON.stringify(result.content));
        localStorage.setItem(ACCESS_TOKEN, result.content.accessToken);
        this.router.navigate(['/profile']);

      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {}
}
