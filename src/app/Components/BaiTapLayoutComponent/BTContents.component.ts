import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-contents',
  template: ` <div class="bt-content">Contents</div> `,
  styles: [
    `
      .bt-content {
        background-color: orange;
        height: 50px;
        padding-top: 10px;
      }
    `,
  ],
})
export class BTContentsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}