import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { AntDModule } from '../_core/Shared/AntDModule/Antd.module';
//  định nghĩa Alias lại đường dẫn trong tsconfig.json
import { AntDModule } from '@Antd';
import { MaterialModule } from '@share/MaterialModule/Material.module';

// ---
import { AboutComponent } from './About.component';
import { ContactComponent } from './Contact.component';
import { HomeComponent } from './Home.component';
import { HomeTemplateComponent } from './HomeTemplate.component';

// Định nghĩa homeRoutes
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './Details.component';
import { FormComponent } from './Form.component';
import { ProfileComponent } from './Users/Profile.component';
import { isLoginGuard } from '../_core/Guards/isLogin.guard';
import { LoginComponent } from './Users/Login.component';
import { RegisterComponent } from './Users/Register.component';
import { isRegisterGuard } from '../_core/Guards/isRegister.guard';
import { PipeComponent } from './Pipe.component';
import { PipeModule } from '../_core/Shared/PipeModule/Pipe.module';
import { LifecycleComponent } from './Lifecycle.component';
import { ChildComponent } from './Child.component';

// Thẻ router-outlet cấp 1 luôn ở file app.module.ts
// Thẻ router-outlet cấp 2 => dùng forChild ở imports

// homeModule chỉ định homeTemplate load lên, vì homeModule không có giao diện
// childen là để chỉ định các path tiếp theo
// childen sẽ load các component động, ở component con, có truyền <router-outlet></router-outlet>
const homeRoutes: Routes = [
  {
    path: '',
    component: HomeTemplateComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: 'form', component: FormComponent },

      // Khi import LoginComponent và RegisterComponent
      // 2 tên này sẽ thừa hưởng tất cả imports ở module mà nó được khai báo
      // Tức là thừa hưởng imports ở file Users.module.ts
      { path: 'login', component: LoginComponent },
      {
        path: 'register',
        component: RegisterComponent,
        canDeactivate: [isRegisterGuard],
      },

      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [isLoginGuard],
      },

      { path: 'pipe', component: PipeComponent },

      { path: 'lifecycle', component: LifecycleComponent },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HomeTemplateComponent,
    DetailsComponent,
    FormComponent,
    ProfileComponent,
    PipeComponent,
    LifecycleComponent,
    ChildComponent,
  ],
  imports: [
    CommonModule,
    AntDModule,
    FormsModule,
    RouterModule.forChild(homeRoutes),
    PipeModule,
    MaterialModule,
  ],
  exports: [],
  // providers:[FilmsService] : khai báo service: phiên bản hiện tại có hỗ trợ nên k cần dùng
})
export class HomeModule {}
