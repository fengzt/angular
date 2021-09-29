import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DirectiveUIComponent } from './DirectiveUI.component';
import { AntDModule } from '../_core/Shared/AntDModule/Antd.module';
import { MaterialModule } from '../_core/Shared/MaterialModule/Material.module';


@NgModule({
  declarations: [DirectiveUIComponent],
  imports: [CommonModule, FormsModule, AntDModule, MaterialModule],
  exports: [DirectiveUIComponent],
})
export class DirectiveUIModule {}
