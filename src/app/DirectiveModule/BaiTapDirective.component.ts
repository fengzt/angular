import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-directive',
  template: `
    <div class="container">
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <a class="navbar-brand" href="#">Cybersoft</a>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a
                data-toggle="modal"
                data-target="#modelId"
                class="nav-link"
                href="#"
                *ngIf="!isLogin"
                >Login<span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item active">
              <a
                data-toggle="modal"
                data-target="#modelId"
                class="nav-link"
                href="#"
                *ngIf="isLogin"
                >Hello {{ userName }} <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                >Dropdown</a
              >
              <div class="dropdown-menu" aria-labelledby="dropdownId">
                <a class="dropdown-item" href="#">Action 1</a>
                <a class="dropdown-item" href="#">Action 2</a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary btn-lg">Launch</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modelId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fuild">
              <div class="form-group">
                <p>Username</p>
                <!-- event binding: dùng #userName: template variable -->
                <input
                  class="form-control"
                  #uname
                  [(ngModel)]="userLogin.userName"
                />
              </div>
              <div class="form-group">
                <p>Password</p>
                <input
                  class="form-control"
                  #pw
                  [(ngModel)]="userLogin.password"
                />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              (click)="login(uname.value, pw.value)"
              type="button"
              class="btn btn-primary"
            >
              Login
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              id="btnClose"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class BaiTapDirectiveComponent implements OnInit {
  isLogin: boolean = false;
  userName: string = '';

  // two-way binding
  userLogin = { userName: '', password: '' };

  ngOnInit() {
    // Giống didmount
    if (localStorage.getItem('userName')) {
      // "!" có thể có giá trị hoặc không có, chấp nhận giá trị undefined,
      // Không báo lỗi, đây là cú pháp của angular bản 10 trở lên (hiện bản 12)
      this.userName = localStorage.getItem('userName')!;
      this.isLogin = true;
    }
  }

  login(userName: string, password: string) {
    console.log('userLogin', this.userLogin);
    console.log('userName', userName);
    console.log('password', password);

    // Vì để trong login nên bấm nút login hay close cũng đều đóng model
    if (password == 'cybersoft') {
      this.isLogin = true;
      this.userName = userName;
      let btnClose: any = document.querySelector('#btnClose');
      btnClose.click();

      localStorage.setItem('userName', userName);
    } else {
      alert('Tài khoản hoặc mật khẩu không đúng !');
    }
  }

  constructor() {}
}
