import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AntDModule } from 'src/app/_core/Shared/AntDModule/Antd.module';
import { UserTemplateComponent } from './UserTemplate.component';

// Cấu hình route cho thẻ <router-outlet> trong UserTemplateComponentư
// (Component được load mặc định trên UserTemplateComponent)
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login.component';
import { RegisterComponent } from './Register.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserTemplateComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
];

@NgModule({
  declarations: [UserTemplateComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AntDModule,
    FormsModule,
    RouterModule.forChild(userRoutes),
  ],
  exports: [],
})
export class UsersModule {}
