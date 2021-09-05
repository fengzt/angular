//a-module
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataBindingComponent } from './DataBinding.component';

@NgModule({
  declarations: [DataBindingComponent], // Chứa component
  imports: [CommonModule, FormsModule], // Chứa các module sử dụng cho module này
  exports: [DataBindingComponent], // Xuất kết quả đầu ra của module này (nếu cần)
})
export class DataBindingModule {}
