import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  template: `
    <div class="container mt-3">
      <form #frmInfo="ngForm" (ngSubmit)="submit(frmInfo.value)">
        <h3>Form - Validation</h3>
        <div class="form-group">
          <p>Email</p>
          <!-- pattern email -->
          <input
            class="form-control"
            #email="ngModel"
            name="email"
            ngModel
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
            minlength="6"
            maxlength="32"
            [(ngModel)]="userInput.email"
          />
          <!-- Khi người dùng chạm vào (touched) HOẶC người dùng thay đổi (dirty) VÀ lỗi ràng buộc (required) -->
          <div *ngIf="(email.touched || email.dirty) && email.errors">
            <!-- Lỗi required mới hiện thẻ p này -->
            <p *ngIf="email.errors.required" class="alert alert-danger">
              Email không được bỏ trống !
            </p>
            <!-- Lỗi pattern mới hiện ra thẻ p này -->
            <p *ngIf="email.errors.pattern" class="alert alert-danger">
              Email không đúng định dạng !
            </p>
            <!-- Lỗi pattern mới hiện ra thẻ p này -->
            <p
              *ngIf="email.errors.minlength || email.errors.maxlength"
              class="alert alert-danger"
            >
              Email từ 6 - 32 ký tự !
            </p>
          </div>
        </div>
        <div class="form-group">
          <p>Name</p>
          <input
            [(ngModel)]="userInput.name"
            class="form-control"
            name="name"
            ngModel
            required
          />
        </div>
        <div class="form-group">
          <p>Schools</p>
          <select
            [(ngModel)]="userInput.school"
            class="form-control"
            name="school"
            ngModel
            required
          >
            <option *ngFor="let school of schools" [value]="school.id">
              {{ school.name }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <!-- invalid thẻ form: toàn bộ các trường input đều invalid -->
          <!-- submitted thẻ form: sau khi thực hiện event submit thì biến nhận giá trị TRUE -->
          <!-- Chỉ sử dụng được với UI/ UX, có thể chỉnh sửa trên giao diện qua Inspect (F12) -->
          <!-- Tối ưu khi backEnd cấu hình để nhận giá trị nào -->
          <button
            type="submit"
            [disabled]="frmInfo.invalid || frmInfo.submitted"
            class="btn btn-success"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <div class="mt-2">
      <table class="table">
        <thead>
          <tr>
            <td>email</td>
            <td>name</td>
            <td>school</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <!-- isEdit bằng True: binding ra dữ liệu được nhập từ input -->
          <ng-container *ngIf="!isEdit">
            <tr *ngFor="let user of arrUser">
              <td>{{ user.email }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.school }}</td>
              <td class="text-center">
                <button (click)="edit(user)" class="mr-2 btn btn-primary">
                  Chỉnh sửa
                </button>
                <!-- Nút cập nhật giả, khi nhập đã cập nhật rồi -->
                <!-- Nút này giúp tắt chế độ edit trên giao diện người dùng, về data đã được cập nhật khi nhập -->
                <button (click)="setEdit()" class="mr-2 btn btn-success">
                  Cập nhật
                </button>
                <button class="ml-2 btn btn-danger">Xóa</button>
              </td>
            </tr>
          </ng-container>
          <!-- isEdit bằng False: two-way binding tự ánh xạ trong table -->
          <ng-container *ngIf="isEdit">
            <tr *ngFor="let user of arrUser">
              <td>{{ user.email }}</td>
              <td><input [(ngModel)]="user.name" /></td>
              <td>
                <select [(ngModel)]="user.school">
                  <option *ngFor="let school of schools" [value]="school.id">
                    {{ school.name }}
                  </option>
                </select>
              </td>
              <td class="text-center">
                <button (click)="edit(user)" class="mr-2 btn btn-primary">
                  Chỉnh sửa
                </button>
                <button (click)="setEdit()" class="mr-2 btn btn-success">
                  Cập nhật
                </button>
                <button class="ml-2 btn btn-danger">Xóa</button>
              </td>
            </tr>
          </ng-container>
        </tbody>
      </table>
    </div>
  `,
  styles: [
    //   ng-valid: xét hợp lệ (không có các lỗi được cấu hình ở input, select)
    //   ng-invalid: xét không hợp lệ => mặc định khi chưa điền sẽ là invalid
    `
      input.ng-invalid,
      select.ng-invalid {
        border-left: 5px solid red;
      }
      input.ng-valid,
      select.ng-valid {
        border-left: 5px solid green;
      }
    `,
  ],
})
// lần đầu load ra ấy, nó k có data
export class FormComponent implements OnInit {
  setEdit() {
    this.isEdit = !this.isEdit;
  }

  isEdit: boolean = false;
  // Cách 1: theo viewChild
  // Cách 2: theo two-way binding
  @ViewChild('frmInfo') frmInfo!: NgForm;
  userInput: User = {
    name: '',
    email: '',
    school: '',
  };
  arrUser: User[] = [
    { name: 'abc', email: 'abc@gmail.com', school: '1' },
    { name: 'dce', email: 'dce@gmail.com', school: '2' },
  ];

  edit(userEdit: User) {
    //   this.userInput = userEdit;
    this.frmInfo.setValue(userEdit);
  }

  // hàm submit này đang thực hiện tính năng CẬP NHẬT
  // Không thực hiện tính năng submit để add user vào arrUser và binding ra Table
  submit(values: User) {
    let userEdit = this.arrUser.find((us) => us.email == values.email);
    if (userEdit) {
      // userEdit.email = values.name;
      userEdit.name = values.name;
      userEdit.school = values.school;
    }
  }

  //   submit(values: NgForm) {
  //     console.log('value', values);
  //   }
  schools: School[] = [
    { id: '1', name: 'Cybersoft' },
    { id: '2', name: 'Cyberlearn' },
  ];
  constructor() {}

  ngOnInit() {}
}

interface User {
  email: string;
  name: string;
  school: string;
}

interface School {
  id: string;
  name: string;
}
