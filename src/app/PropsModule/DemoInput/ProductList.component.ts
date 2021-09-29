import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ProductComponent } from './Product.component';
// Import tay ViewChildren, QueryList để truy xuất đến 1 class, không đơn thuần 1 phần tử
// Lớn hơn ViewChild => thường dùng cho vòng lặp, thay đổi hàng loạt
// react có thể khai báo : let a = <abc/>; angular không thể
// -> Ứng dụng viewChild và viewChildren

@Component({
  selector: 'app-product-list',
  template: `
    <div class="container">
      <!-- <div class="w-25"> -->
      <!-- propertive binding => nhận biến -->
      <!-- <app-product [tenSanPham]="'Iphone'"></app-product>
        <app-product [tenSanPham]="'Iphone X'"></app-product>
      </div> -->

      <!-- (eventViewDetail)="": @output từ component con -> truyền vào cha -->
      <!-- [userInput]="": @input từ component cha -> truyền vào con -->
      <!-- component cha: ProductList, component con: Product -->
      <div class="row">
        <div class="col-4" *ngFor="let user of arrUser">
          <app-product
            (eventViewDetail)="viewDetailParient($event)"
            [userInput]="user"
          ></app-product>
        </div>
      </div>
      <br />

      <div class="form-group">
        <p>Password</p>
        <input class="form-control" #pass />
        <button
          (click)="changePassword(pass.value)"
          class="btn btn-outline-danger"
        >
          Change Password
        </button>
      </div>

      <br />
      <div>
        <h3>Thông tin chi tiết</h3>
        <div class="row">
          <div class="col-4">
            <img [src]="userDetail.avatar" width="300" height="300" alt="..." />
          </div>
          <div class="col-8">
            <h3>Thông tin tài khoản</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>UserName</th>
                  <th>{{ userDetail.userName }}</th>
                </tr>
                <tr>
                  <th>Email</th>
                  <th>{{ userDetail.email }}</th>
                </tr>
                <tr>
                  <th>Password</th>
                  <th>{{ userDetail.password }}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
      <br />
    </div>
  `,
})
export class ProductListComponent implements OnInit {
  // --------- Trả kết quả về là 1 array
  // ViewChildren dùng để thay đổi hàng loạt
  @ViewChildren(ProductComponent)
  lstTagProduct!: QueryList<ProductComponent>;

  arrUser: User[] = [
    {
      userName: 'Khải',
      password: '254136',
      email: 'abc@gmail.com',
      avatar: 'https://i.pravatar.cc?u=khai',
    },
    {
      userName: 'Tài',
      password: '454135',
      email: 'abd@gmail.com',
      avatar: 'https://i.pravatar.cc?u=tai',
    },
    {
      userName: 'Hải',
      password: '2054138',
      email: 'abce@gmail.com',
      avatar: 'https://i.pravatar.cc?u=hai',
    },
  ];

  userDetail: User = this.arrUser[0];

  // ---- Lấy dữ liệu output từ Product.component.ts (component con)
  viewDetailParient(userDetail: User) {
    this.userDetail = userDetail;
  }

  changePassword(newPassword: string) {
    // Truy xuất đến các thẻ <app-product>
    // => Vòng lặp dùng để duyệt đến từng thẻ và thay đổi thuộc tính this.userInput của thẻ
    this.lstTagProduct.forEach(
      (tagProduct: ProductComponent, index: number) => {
        if (tagProduct.userInput.userName === 'Khải') {
          tagProduct.userInput.password = newPassword;
        }
      }
    );
  }

  constructor() {}

  ngOnInit() {}
}

interface User {
  userName: string;
  password: string;
  email: string;
  avatar: string;
}
