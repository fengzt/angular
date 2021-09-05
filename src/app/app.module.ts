import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapDatabindingModule } from './BaiTapDatabinding/BaiTapDatabinding.module';
import { BaiTapLayoutModule } from './Components/BaiTapLayoutComponent/BaiTapLayout.module';
import { DemoComponent } from './Components/Demo.component';
import { DataBindingModule } from './DataBindingModule/DataBinding.module';
import { DirectiveModule } from './DirectiveModule/Directive.module';

@NgModule({
  declarations: [
    // Nơi chứa component (mỗi component sinh ra đều phải có module chứa nó)
    // Module là 1 hộp chứa các component: dễ dàng maintain, thay thế, nâng cấp
    // Phải khai báo trong module mới dùng được,
    // các component trong cùng module có thể tương tác nhau
    // -- khai báo xong, qua app.component.html để khai báo tên thẻ component
    AppComponent,
    DemoComponent,
  ],
  imports: [
    // Nơi import các module khác của ứng dụng
    BrowserModule,
    BaiTapLayoutModule,
    DataBindingModule,
    DirectiveModule,
    BaiTapDatabindingModule
  ],
  // Nơi khai báo các serve
  providers: [],
  // Nơi khai báo các component chạy trên file index
  // Component <app-root></app-root> được chạy trên file index.html
  bootstrap: [AppComponent],
})
export class AppModule {}
