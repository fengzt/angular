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
      </div>
    </div>
  `,
})

// Module Part
export class DirectiveComponent implements OnInit {
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
  constructor() {}

  ngOnInit() {}
}

interface User{
    userName: string;
    password: string;
    email: string;
    avatar: string;
}