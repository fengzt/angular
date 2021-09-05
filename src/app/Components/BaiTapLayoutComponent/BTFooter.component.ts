import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-footer',
  template: ` <div class="bt-footer">Footer</div> `,
  styles: [
    `
      .bt-footer {
        background-color: blue;
        height: 50px;
        padding-top: 10px;
      }
    `,
  ],
})
export class BTFooterComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}