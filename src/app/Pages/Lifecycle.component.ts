import { Component, OnInit } from '@angular/core';

// Dùng để áp dụng jquery
declare let $: any;

// keyword: lifecycle angular
// https://viblo.asia/p/lifecycle-hooks-trong-angular-6J3Zgw8qZmB

@Component({
  selector: 'app-lifecycle',
  template: `
    <div class="container my-3">
      Demo Lifecycle
      <app-child [title]="title"></app-child>
      <br />
      <input #iTitle class="form-control mt-2" placeholder="Type your new title"/>
      <button (click)="changeTitle(iTitle.value)" class="btn btn-success mt-2">
        Change title
      </button>
    </div>
  `,
})
export class LifecycleComponent implements OnInit {
  title: string = 'cybersoft';
  constructor() {}

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

  ngOnInit() {}
}
