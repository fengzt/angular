import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AntDModule } from 'src/app/_core/Shared/AntDModule/Antd.module';
import { AdminTemplateComponent } from './AdminTemplate';

const adminRoutes: Routes = [{ path: '', component: AdminTemplateComponent }];

@NgModule({
  declarations: [AdminTemplateComponent],
  imports: [
    CommonModule,
    AntDModule,
    FormsModule,
    RouterModule.forChild(adminRoutes),
  ],
  exports: [],
})
export class AdminModule {}
