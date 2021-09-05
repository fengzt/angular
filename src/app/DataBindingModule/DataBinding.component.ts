//a-component-inline

import { Component, OnInit } from '@angular/core';

// decorator - view

// import FormsModule trong Databinding.module.ts để dùng twoway binding
@Component({
  selector: 'app-data-binding',
  template: `
    <div class="container">
      <h1 class="display-4">DataBinding</h1>
      <h3>A. One-way binding</h3>
      <p class="text-danger">
        <!-- Interpolation ám chỉ cặp dấu ngoặc nhọn -->
        1. Interpolation (Binding dữ liệu từ module => view thông qua thuộc tính
        của cặp dấu ngoặc nhọn ) => Thường dùng cho phần giao diện innerHTML
      </p>
      <p>Tiêu đề: {{ title }}</p>
      <input value="{{ title }}" style="margin-bottom:15px" />
      <p class="text-danger">
        2. Property binding (binding dựa trên thuộc tính của thẻ thông qua [])
        => Thường dùng cho các thẻ input
      </p>
      <div [innerHTML]="title"></div>
      <input [value]="title" style="margin-bottom:15px" />
      <p class="text-danger">
        3. Event binding (Thay đổi dữ liệu trên giao diện, thông qua xử lý thao
        tác từ người dùng => tự động thay đổi giao diện sau khi chạy hàm)
      </p>
      <div class="form-group">
        <p>Tiêu đề</p>
        <!-- #: template variable  : đại diện cho thẻ input-->
        <!-- (click) thay thế cho onClick; (change) thay thế cho onChange -->
        <input class="form-control w-25" #tagInput /><br />
        <button class="btn btn-success" (click)="changeTitle(tagInput.value)">
          Change title
        </button>
      </div>
      <h3 class="mt-5">
        B. Two-way binding (Binding dữ liệu 2 chiều tự động => tác động đến all
        thuộc tính có dùng trước đó hoàn toàn tự động)
      </h3>
      <input class="form-control mb-5" [(ngModel)]="title" />

      <!-- <input class="form-control" (keyup)="changeTitle(tagInput.value)" /> -->

      <table class="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>image</th>
            <th>price</th>
            <th>quantity</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let product of arrProduct">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>
              <img [src]="product.img" width="50" height="50" alt="..." />
            </td>
            <td>
              <input class="form-control" [(ngModel)]="product.quantity" />
            </td>
            <td>{{ product.price * product.quantity }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})

//Module: khai báo ở dây, và binding ở template (decorator)
export class DataBindingComponent implements OnInit {
  // MVVM : Module - View - ViewModule : auto render lại
  // Dữ liệu muốn hiển thị được trên giao diện <=> Phải khai báo là thuộc tính của Component
  // All thuộc tính của Angular đều là state
  title: string = 'Bootcamp08E';

  // Ví dụ cho two-way binding
  arrProduct: Product[] = [
    {
      id: '1',
      name: 'Iphone X',
      price: 1000,
      img: 'https://picsum.photos/id/1/200/200',
      quantity: 15,
    },
    {
      id: '2',
      name: 'Iphone XS',
      price: 2000,
      img: 'https://picsum.photos/id/2/200/200',
      quantity: 20,
    },
    {
      id: '3',
      name: 'Iphone XS Max',
      price: 3000,
      img: 'https://picsum.photos/id/3/200/200',
      quantity: 10,
    },
  ];
  constructor() {}

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

  ngOnInit() {}
}

interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
  quantity: number;
}
