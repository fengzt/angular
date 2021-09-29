import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// Phải import tay Output và EventEmitter để xài @output

@Component({
  selector: 'app-product',
  template: `
    <div class="card text-white">
      <img [src]="userInput.avatar" alt="..." />
      <div class="card-body bg-dark">
        <!-- <p>{{ tenSanPham }}</p> -->
        <!-- <p>1000</p> -->
        <p>UserName: {{ userInput.userName }}</p>
        <p>Email: {{ userInput.email }}</p>
        <p>Password: {{ userInput.password }}</p>
        <button (click)="viewDetail()" class="btn btn-success">
          Xem chi tiết
        </button>
        <!-- <button (click)="viewDetail2()" class="btn btn-danger">
          Xem chi tiết 2
        </button> -->
      </div>
    </div>
  `,
})
export class ProductComponent implements OnInit {
  // Input dùng để nhận giá trị tham số tại nơi sử dụng thẻ này
  // @Input() tenSanPham: any;
  // @Input('name') name1
  // name: là tên name được đặt ở ProductList,
  // Nếu đồng nhất và chỉ có 1 name, thì bỏ trống cũng được
  // name1 : là tên sẽ đặt và dùng ở chính Product
  // Nhận từ ProductList.component.ts
  @Input('userInput') userInput!: User;

  // giá trị default: cách viết khác, đa phần vẫn dùng "!" hơn
  //     @Input('userInput') userInput: User = {
  //       userName: 'Hải',
  //       password: '2054138',
  //       email: 'abce@gmail.com',
  //       avatar: 'https://i.pravatar.cc?u=hai',
  //   };

  // ----- Khai báo output
  @Output() eventViewDetail = new EventEmitter();
  viewDetail() {
    // Đưa dữ liệu ra ngoài thông qua phương thức emit
    // ------ Đưa nhiều dữ liệu ra ngoài. Vì emit chỉ nhận 1 value
    // (1) Đưa dạng mảng array
    // let arrParam: [User, boolean] = [this.userInput, true];
    // this.eventViewDetail.emit(arrParam);

    // (2) Đưa ra dạng object
    // let objectParam = {
    //   user: this.userInput,
    //   status: true
    // }
    // this.eventViewDetail.emit(objectParam);

    this.eventViewDetail.emit(this.userInput);

  }

  // viewDetail2() {
  //   this.eventViewDetail.emit(this.userInput);
  // }

  constructor() {}

  ngOnInit() {}
}

interface User {
  userName: string;
  password: string;
  email: string;
  avatar: string;
}
