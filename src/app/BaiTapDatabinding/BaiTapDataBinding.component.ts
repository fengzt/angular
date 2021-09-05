import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-databinding',
  template: `
    <div class="container mt-3">
      <div class="my-3">
        <h2>Register Form</h2>
        <div class="form-group">
          <p>Email:</p>
          <input
            class="form-control"
            placeholder="Enter your email"
            #tagEmail
            [(ngModel)]="tagEmail.value"
          />
        </div>
        <div class="form-group">
          <p>FullName:</p>
          <input
            class="form-control"
            placeholder="Enter your Full name"
            #tagFullName
          />
        </div>
        <button class="btn btn-success" (click)="changeContents()">
          Submit
        </button>
      </div>
      <p style="color: red;">{{ email }}: {{ tagEmail.value }}</p>
      <p style="color: orange;">{{ fullName }}: {{ tagFullName.value }}</p>
    </div>
  `,
})
export class BaiTapDatabindingComponent implements OnInit {
  email: string = 'Email';
  fullName: string = 'FullName';

  constructor() {}

  changeContents(){};

  ngOnInit() {}
}

// interface User{
//     email: string;
//     fullName: string;
// }
