import { Component, OnInit } from '@angular/core';


// Styles tương ứng inline (1), file scss chỉ ưu tiên thứ 2
@Component({
  selector: 'app-bt-header',
  template: ` <div class="bt-header text-center" style="height: 50px;">Header</div> `,
  styles: [
    `
      .bt-header {
        background-color: red;
        padding-top:10px;
      }
    `,
  ],
})
export class BTHeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}