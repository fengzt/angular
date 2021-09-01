// a-component-inline
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo', // Oke nhất là dùng tên thẻ, có thể dùng .app-demo || [app-demo]
    template: `
    <div>
        Demo Component Angular
    </div>
    `
})

// Angular Có declarations định nghĩa class thành component
export class DemoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}