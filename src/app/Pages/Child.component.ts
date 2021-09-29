import {
  Component,
  Input,
  OnChanges,
  OnInit,
  OnDestroy,
  SimpleChanges,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="container">
      <p>title: {{ title }}</p>
    </div>
  `,
})
export class ChildComponent
  implements OnInit, OnChanges, OnDestroy, AfterContentInit
{
  @Input() title: string = '';
  timeout: any;

  //   ---
  constructor() {
    console.log('constructor');
  }

  // ---
  ngOnChanges(changes: SimpleChanges): void {
    // chạy trước ngOnInit và chạy mỗi khi input thay đổi
    // Về thời điểm chạy
    // Hơi giống useEffect(callback,[state])

    console.log('onChanges', changes);
  }

  // ----
  ngOnInit() {
    // Giống DidMountComponent: chạy 1 lần duy nhất khi component load xong HTML
    // Về thời điểm chạy
    // Hơi giống useEffect(callback,[])

    // Thường dùng để call API
    console.log('oninit');

    this.timeout = setInterval(() => {
      console.log(1);
    }, 1000);
  }

  // Dùng khi import thư viện bên ngoài vào: như jQuery
  ngAfterContentInit() {
    // throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    // Giống componentWillUnmount
    // Chạy trước khi component biến mất khỏi giao diện
    // Test = cách chuyển qua rout khác, sẽ dừng chạy Interval

    // Mục đích: Xóa các biến chạy ngầm từ Observable hoặc service - chạy - ngầm
    clearInterval(this.timeout);
  }
}
