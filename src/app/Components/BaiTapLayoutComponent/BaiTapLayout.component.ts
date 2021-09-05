import { Component, OnInit } from '@angular/core';

// 1 component sinh ra phải được khai báo trên module
// cụ thể ở đây là app.module.ts
@Component({
  selector: 'app-bai-tap-layout', // Tên thẻ component
  template: `
    <div class="text-center text-white">
      <h2 class="text-dark">Bài tập layout component</h2>
      <app-bt-header></app-bt-header>
      <div class="d-flex">
        <div style="width:30%">
          <app-bt-sidebar></app-bt-sidebar>
        </div>
        <div style="width:70%">
          <app-bt-contents></app-bt-contents>
        </div>
      </div>
      <app-bt-footer></app-bt-footer>
    </div>
  `,
})
export class BaiTapLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
