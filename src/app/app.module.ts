import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './Components/Demo.component';

@NgModule({
  declarations: [
    // Nơi chứa component (mỗi component sinh ra đều phải có module chứa nó)
    // Module là 1 hộp chứa các component: dễ dàng maintain, thay thế, nâng cấp
    AppComponent, DemoComponent
  ],
  imports: [
    // Nơi import các module khác của ứng dụng
    BrowserModule
  ],
  // Nơi khai báo các serve
  providers: [], 
  // Nơi khai báo các component chạy trên file index
  // Component <app-root></app-root> được chạy trên file index.html
  bootstrap: [AppComponent] 
})
export class AppModule { }
