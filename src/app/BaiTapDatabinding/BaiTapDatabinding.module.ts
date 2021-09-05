import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaiTapDatabindingComponent } from './BaiTapDataBinding.component';

@NgModule({
  declarations: [BaiTapDatabindingComponent],
  imports: [CommonModule, FormsModule],
  exports: [BaiTapDatabindingComponent],
})
export class BaiTapDatabindingModule {}
