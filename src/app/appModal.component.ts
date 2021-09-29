// a-component-inline
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FilmsService } from './_core/Services/Films.service';

@Component({
  selector: 'app-modal',
  template: `
    <!-- b4-modal-default -->
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary btn-lg">Launch</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modelId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ phimModal.tenPhim }}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img [src]="phimModal.hinhAnh" alt="..." class="w-100" />
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  `,
})
// ---
// Cứ subscribe là phải dùng OnDestroy để tránh subscribe chạy ngầm
// ---
export class ModalComponent implements OnInit, OnDestroy {
  phimModal: any = {
    tenPhim: 'default',
    hinhAnh: 'https://picsum.photos/200/200',
  };

  subModal!: Subscription; // biến quản lý các biến observable

  //   Lấy giá trị về từ ngrx store : import Store
  // đặt giống tên ở app.module.ts : StoreModule
  constructor(
    private filmService: FilmsService,
    private store: Store<{ modalReducer: FilmModal }>
  ) {}

  ngOnInit() {
    // Cách 1: dùng store observable
    // ---  Hàm subcribe chạy mỗi khi state Modal (là dataModal) thay đổi
    // phimModal sẽ lấy giá trị từ state Modal (là dataModal) để hiển thị lên giao diện
    // Lấy dataModal từ file Film.service.ts
    // this.filmService.dataModal.subscribe((dataModal) => {
    //   this.phimModal = dataModal;
    // });

    // ---
    // Cách 2: đùng ngrx store
    // Reducer nào cần lấy thì khai báo trong select, đồng nhất với khai trong constructor
    this.store.select('modalReducer').subscribe((result) => {
      console.log('result', result);
      this.phimModal = result;
    });
  }

  ngOnDestroy(): void {
    // Unsub tất cả các biến observable khi Component mất khỏi giao diện
    // Tức là: ngưng theo dõi các biến chạy ngầm khi qua trang khác
    // Tối ưu tốc độ load web // app
      if (this.subModal) {
          this.subModal.unsubscribe();
      }
  }
}

interface FilmModal {
  maPhim: string;
  tenPhim: string;
  hinhAnh: string;
}
