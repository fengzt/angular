import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-sidebar',
  template: ` <div class="bt-sidebar">Sidebar</div> `,
  styles: [
    `
      .bt-sidebar {
        background-color: green;
        height: 50px;
        padding-top: 10px;
      }
    `,
  ],
})
export class BTSidebarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}