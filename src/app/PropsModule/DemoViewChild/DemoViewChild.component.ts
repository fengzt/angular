import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BTHeaderComponent } from 'src/app/Components/BaiTapLayoutComponent/BTHeader.component';
import { ProductListComponent } from '../DemoInput/ProductList.component';
// ------- Import viewChild, ElementRef

@Component({
  selector: 'app-demo-view-child',
  template: `
    <div class="container">
      <h3>Demo View Child</h3>
      <div class="form-group">
        <p>UserName</p>
        <!-- # : template variable -->
        <input
          id="userName"
          class="form-control"
          #usName
          [(ngModel)]="newUser.userName"
        />
      </div>
      <div class="form-group">
        <p>Password</p>
        <!-- # : template variable -->
        <input
          id="userName"
          class="form-control"
          [(ngModel)]="newUser.password"
        />
      </div>
      <div class="form-group">
        <p>Email</p>
        <!-- # : template variable -->
        <input
          id="userName"
          class="form-control"
          [(ngModel)]="newUser.email"
        />
      </div>

      <div class="form-group">
        <button (click)="getUserName()" class="btn btn-success">
          Get userName
        </button>
        <button (click)="addUser()" class="btn btn-outline-success">
          Add userName
        </button>
      </div>
      <br />
      <div>
        <h3>Danh sách user</h3>
        <app-product-list #tagProductList></app-product-list>
      </div>
    </div>
  `,
})
export class DemoViewChildComponent implements OnInit {
  constructor() {}
  newUser: User = { userName: '', password: '', email: '', avatar: '' };
  // "!" : theo logic Angular, để tránh DOM sai đối tượng
  //  Không có "!" -> Báo lỗi
  // tagInput: là tên tự khai báo (có thể thay đổi)
  // ViewChild có thể là thẻ HTML hoặc Component

  // --- Lấy dữ liệu ra vào, điều khiển component con, điều hướng đối tượng hơn @input và @output  
    
  @ViewChild('usName') tagInput!: ElementRef; // Element: đối tượng HTML trong Angular
  @ViewChild('tagProductList') tagProductList!: ProductListComponent;

  ngOnInit() {}

  addUser() {
    let newUser = { ...this.newUser, avatar: 'https://i.pravatar.cc?u=' + this.newUser.userName };    

    // DOM đến thẻ app-product-list thông qua ViewChild
    this.tagProductList.arrUser.push(newUser);
  } 
    
  getUserName() {
    alert(this.tagInput.nativeElement.value);
    this.tagInput.nativeElement.value = 'Hello world';
    this.tagInput.nativeElement.style.color = 'red';
    // Vẫn DOM được theo ES6
    // Nhưng DOM này sai quy tắc VMMV (View - Model - ModelView) của Angular
    // document... không thuộc quản lý của Model
    // document.getElementById('userName')!.style.fontSize = '50px';
    console.log(this.tagProductList);
    this.tagProductList.arrUser = [];
  }
}

interface User {
  userName: string;
  password: string;
  email: string;
  avatar: string;
}