//a-module
// sinh ra file tương tự app.component.ts

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaiTapLayoutComponent } from './BaiTapLayout.component';
import { BTContentsComponent } from './BTContents.component';
import { BTFooterComponent } from './BTFooter.component';
import { BTHeaderComponent } from './BTHeader.component';
import { BTSidebarComponent } from './BTSidebar.component';

// import { NameComponent } from './name.component';

@NgModule({
  declarations: [
    BaiTapLayoutComponent,
    BTHeaderComponent,
    BTContentsComponent,
    BTSidebarComponent,
    BTFooterComponent,
  ], // Chứa các component thuộc module này
  exports: [BaiTapLayoutComponent], // Kết quả cần xuất ra (component, module) của module này
  // Muốn xài tên nào thì exports tên đó ra, kể cả [Component, Module]

  //   providers: [], : chưa dùng tới
  imports: [CommonModule], // CommonModule default phải có
  // imports: nơi import các module khác(các thư viện như antd, hoặc Module khác)
  // ComonModule chứa các function: if-else swith-case mà Angular hỗ trợ
})
export class BaiTapLayoutModule {}
