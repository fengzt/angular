import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapDatabindingModule } from './BaiTapDatabinding/BaiTapDatabinding.module';
import { BaiTapLayoutModule } from './Components/BaiTapLayoutComponent/BaiTapLayout.module';
import { DemoComponent } from './Components/Demo.component';
import { DataBindingModule } from './DataBindingModule/DataBinding.module';
import { DirectiveModule } from './DirectiveModule/Directive.module';
import { PropsModule } from './PropsModule/Props.module';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectiveUIModule } from './DemoDerectiveUI/DirectiveUI.module';
// Khai báo routing

import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './Pages/Home.component';
// import { AboutComponent } from './Pages/About.component';
// import { ContactComponent } from './Pages/Contact.component';
// import { LoginComponent } from './Pages/Users/Login.component';
// import { RegisterComponent } from './Pages/Users/Register.component';
import { HomeModule } from './Pages/Home.module';
import { UsersModule } from './Pages/Users/Users.module';
import { AdminModule } from './Pages/Admin/Admin.module';
import { HeaderInterceptor } from './_core/Guards/Author.interceptor';
import { ModalComponent } from './appModal.component';
import { StoreModule } from '@ngrx/store';
import { modalReducer } from './_core/NGRXStore/Reducers/Modal.Reducer';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// http://localhost:4200/*path* : sẽ ra component tương ứng
// có imports RouterModule.forRoot(appRoute)

// Này là gốc, phải dùng forRoot (Chỉ dùng trong file app.module)
let appRoute: Routes = [
  // http://localhost:4200/home rồi mới xét vào HomeModule
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'users', loadChildren: () => UsersModule },
  { path: 'admin', loadChildren: () => AdminModule },

  // http://localhost:4200/ rồi mới xét vào Homedule
  { path: '', loadChildren: () => HomeModule },

  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: '', component: HomeComponent },
  // { path: '**', redirectTo: '' },
];

registerLocaleData(en);

@NgModule({
  declarations: [
    // Nơi chứa component (mỗi component sinh ra đều phải có module chứa nó)
    // Module là 1 hộp chứa các component: dễ dàng maintain, thay thế, nâng cấp
    // Phải khai báo trong module mới dùng được,
    // các component trong cùng module có thể tương tác nhau
    // -- khai báo xong, qua app.component.html để khai báo tên thẻ component
    AppComponent,
    DemoComponent,
    ModalComponent,
  ],
  imports: [
    // Nơi import các module khác của ứng dụng
    BrowserModule,
    BaiTapLayoutModule,
    DataBindingModule,
    DirectiveModule,
    BaiTapDatabindingModule,
    PropsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DirectiveUIModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    // ---------------------- Cài ngrx store -------------
    // Thiết lập 1 store tổng để dễ quản lý
    StoreModule.forRoot({
      modalReducer: modalReducer,
      // Nơi khai báo các reducer...
    }),

    //--- chạy lệnh service worker: ng add @angular/pwa
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }), // Module giúp gọi API
  ],
  // ------------
  // Nơi khai báo các serve
  providers: [
    // Set up đa ngôn ngữ "I18N Angular"
    // Tự provide khi npm i ng-zorro của Ant Design
    // https://ng.ant.design/docs/i18n/en
    // Video 61 của dự án Movie - chức năng đa ngôn ngữ

    { provide: NZ_I18N, useValue: en_US },

    // Khai báo interceptor
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  ],

  // Nơi khai báo các component chạy trên file index
  // Component <app-root></app-root> được chạy trên file index.html
  bootstrap: [AppComponent],
})
export class AppModule {}
