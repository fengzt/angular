import { Component, OnInit } from '@angular/core';

// Decorator Part
@Component({
  selector: 'app-directive',
  template: `
    <div class="container" style="margin-bottom:50px">
      <h3 class="display-4">Structural (directive angular cung cấp)</h3>
      <h3>*ngIf (tương tự toán tử 3 ngôi của es6)</h3>
      <nav class="nav bg-dark text-white">
        <a
          *ngIf="!isLogin; else temLogin"
          class="nav-link active text-white"
          href="#"
          (click)="login()"
          >Login</a
        >
        <!-- <a
          *ngIf="isLogin"
          class="nav-link active text-white"
          href="#"
          (click)="logout()"
          >Hello ! {{ userName }}</a
        > -->
      </nav>

      <!-- Cách dùng thứ 2 của *ngIf là *ngIf else -->
      <ng-template #temLogin>
        <a
          *ngIf="isLogin"
          class="nav-link active text-white"
          href="#"
          (click)="logout()"
          >Hello ! {{ userName }}</a
        >
      </ng-template>

      <!-- Rất hiếm người làm cách này để render ra giao diện -->
      <!-- <ng-container [ngTemplateOutlet]="temLogin" >aa</ng-container> -->

      <hr />

      <!-- Nhớ import FormsModule ở module -->
      <div class="form-group">
        <p>Nhập số</p>
        <input class="form-control w-25" [(ngModel)]="numb" />
      </div>
      <div class="alert alert-success">
        <p *ngIf="numb % 2 === 0">Số chẵn</p>
        <p *ngIf="numb % 2 !== 0">Số lẻ</p>
      </div>
      <h3>*ngSwitchCase</h3>
      <select [(ngModel)]="color" class="form-control w-25">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
      </select>
      <div [ngSwitch]="color" class="my-3 font-weight-bold">
        <!-- lưu ý: là trong "" có 1 cặp '' -->
        <p style="color:red;" *ngSwitchCase="'red'">Red</p>
        <p style="color:green;" *ngSwitchCase="'green'">Green</p>
        <p style="color:blue;" *ngSwitchCase="'blue'">Blue</p>
        <p style="color:orange;" *ngSwitchCase="'orange'">Orange</p>
      </div>

      <hr />
      <div>*ngFor</div>
      <div class="row">
        <!-- Dùng ng-container để không bị vỡ giao diện, giống Fragment -->
        <ng-container *ngIf="arrUser.length !== 0">
          <div class="col-4" *ngFor="let user of arrUser; let index = index">
            <div class="card">
              <img [src]="user.avatar" />
              <div class="card-body">
                <p>ID: {{ index + 1 }}</p>
                <p>UserName: {{ user.userName }}</p>
                <p>Password: {{ user.password }}</p>
                <p>Email: {{ user.email }}</p>
              </div>
            </div>
          </div>
        </ng-container>
      </div>
      <hr />
      <h3>ng-content</h3>
      <app-demo-ngContent>
        <!-- ng-content dùng giữa thẻ đóng - mở của component -->
        <!-- Thường dùng để truyền component đi, thay cho truyền props bên react -->
        <img class="logo" src="https://picsum.photos/50/50" alt="..." />

        <h3 class="title">Cybersoft</h3>
      </app-demo-ngContent>
      <hr />

      <h3>[ngClass]</h3>
      <p [ngClass]="{ 'mau-chu': mauChu, 'font-chu': fontChu }">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        voluptatem corrupti optio repellendus expedita obcaecati dignissimos rem
        nostrum doloremque vitae?
      </p>
      <table class="table">
        <thead>
          <tr>
            <th>userName</th>
            <th>password</th>
            <th>email</th>
            <th>avatar</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <!-- class được add vào nếu biểu thức sau : là True -->
          <tr
            [ngClass]="{ 'bg-dark text-white': index % 2 == 0 }"
            *ngFor="let user of arrUser; let index = index"
          >
            <th>{{ user.userName }}</th>
            <th>{{ user.password }}</th>
            <th>{{ user.email }}</th>
            <th>{{ user.avatar }}</th>
            <th></th>
          </tr>
        </tbody>
      </table>
      <hr />
      <h3>[ngStyle]</h3>
      <div
        [ngStyle]="{ 'background-image': backgroundImg }"
        style="height:50px"
      ></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit
        velit exercitationem error cupiditate porro neque corrupti nemo labore
        sapiente.
      </p>
      <hr />
      <h3>Bài tập 3</h3>
      <p [ngStyle]="{ 'font-size': fontSize + 'px' }">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit
        velit exercitationem error cupiditate porro neque corrupti nemo labore
        sapiente.
      </p>
      <button class="m-2 btn btn-outline-success" (click)="tangGiamFont(true)">
        +
      </button>
      <button class="m-2 btn btn-outline-success" (click)="tangGiamFont(false)">
        -
      </button>

      <hr />
      <h3>Bài tập login</h3>
      <app-bt-directive></app-bt-directive>
      <hr />
      <h3>Bài tập Quản lý Sản phẩm</h3>
      <app-bt-qlsp></app-bt-qlsp>
    </div>
  `,
  styles: [
    `
      .mau-chu {
        color: red;
      }
      .font-chu {
        font-size: 25px;
      }
    `,
  ],
})

// Module Part
export class DirectiveComponent implements OnInit {
  fontSize: number = 17;
  backgroundImg: string = "url('https://picsum.photos/200/200')";

  mauChu: boolean = true;
  fontChu: boolean = false;

  userName: string = 'FengABC';
  isLogin: boolean = false;
  numb: number = 5;
  color: string = 'red';
  arrUser: User[] = [
    {
      userName: 'Feng',
      password: '254136',
      email: 'abc@gmail.com',
      avatar: 'https://i.pravatar.cc?u=feng',
    },
    {
      userName: 'Tài',
      password: '454135',
      email: 'abd@gmail.com',
      avatar: 'https://i.pravatar.cc?u=tai',
    },
    {
      userName: 'Hải',
      password: '2054138',
      email: 'abce@gmail.com',
      avatar: 'https://i.pravatar.cc?u=hai',
    },
  ];

  login() {
    this.isLogin = true;
  }

  logout() {
    this.isLogin = false;
  }

  tangGiamFont(tangGiam: boolean) {
    if (tangGiam) {
      this.fontSize += 2;
    } else {
      this.fontSize -= 2;
    }
  }
  constructor() {}

  ngOnInit() {}
}

interface User {
  userName: string;
  password: string;
  email: string;
  avatar: string;
}
