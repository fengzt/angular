// a-component-inline
import { Component, OnInit } from '@angular/core';

// Pipe là những kiểu dữ liệu đã được định dạng sẵn của Angular
// Có thể thay thế 1 số hàm của cs6
// https://angular.io/api#!?apiFilter=pipe&type=pipe

@Component({
  selector: 'app-pipe',
  template: `
    <div class="container my-3">
      <h3>Demo Pipe</h3>
      <p>UpperCase: {{ title | uppercase }}</p>
      <p>LowerCase: {{ title | lowercase }}</p>
      <p>Percent: {{ percent | percent }}</p>
      <p>Money: {{ money | percent }}</p>

      <!-- Number: cứ 3 số là có 1 dấu ',' để ngăn cách -->
      <p>Money: {{ money | number }}</p>

      <!-- 5 là phần nguyên của số thập phân phải có trong ô nhớ, vd: 00010.2 00001.3 -->
      <!-- 4 là minimum của phần thập phân -->
      <!-- 6 là maximum của phần thập phân -->

      <p>Money: {{ money | number: '5.4-6' }}</p>
      <p>Money: {{ money | number: '1.3-3' }}</p>

      <!-- Hiển thị dạng object -->
      <p>Product: {{ renderJson(product) }}</p>
      <p>Product: {{ product | json }}</p>

      <!-- Hiển thị ngày tháng -->
      <p>Date: {{ dateNow | date: 'dd/MM/yyyy' }}</p>
      <p>Date: {{ dateNow | date: 'dd - MM - yyyy' }}</p>
      <p>Date: {{ dateNow | date: 'dd // MM // yyyy hh:mm:ss a' }}</p>
    </div>
  `,
})
export class PipeComponent implements OnInit {
  title: string = 'CyBerSoft';
  percent: number = 0.76;
  money: number = 1300.23165165;
  product: any = { id: 1, name: 'Iphone', price: 3000 };

  // Date() có thể + - ngày tháng chính xác theo thực tế
  // Date() là format chung cho server (Date không phải string)
  dateNow: Date = new Date();

  constructor() {}

  renderJson(object: any) {
    return JSON.stringify(object);
  }

  ngOnInit() {}
}
