import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `
    <div class="container mt-2">
      <h1 class="display-4">Register</h1>
      <form #frmRegister="ngForm" (ngSubmit)="register(frmRegister.value)">
        <div class="form-group">
          <p>Tài khoản</p>
          <input name="taiKhoan" class="form-control" ngModel />
        </div>
        <div class="form-group">
          <p>Mật khẩu</p>
          <input name="matKhau" class="form-control" ngModel type="password" />
        </div>
        <div class="form-group">
          <p>Họ tên</p>
          <input name="hoTen" class="form-control" ngModel />
        </div>
        <div class="form-group">
          <p>Email</p>
          <input name="email" class="form-control" ngModel />
        </div>
        <div class="form-group">
          <p>Số điện thoại</p>
          <input name="soDt" class="form-control" ngModel />
        </div>
        <div class="form-group">
          <button class="btn btn-success" type="submit">Register</button>
        </div>
      </form>
    </div>
  `,
})
export class RegisterComponent implements OnInit {
  isRegister: boolean = false;
  constructor() {}

  ngOnInit() {}

  register(values: any) {
    //   điền xong form mới thành true
    this.isRegister = true;
  }
}
