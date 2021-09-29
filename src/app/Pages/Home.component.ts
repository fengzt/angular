import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Films } from '../_core/Models/Films';
import { FilmsService } from '../_core/Services/Films.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <h3>Danh sách phim</h3>
      <div class="row">
        <div class="col-4" *ngFor="let film of films">
          <div class="card">
            <img [src]="film.hinhAnh" alt="..." />
            <div class="card-body">
              <p>{{ film.tenPhim }}</p>

              <!-- Sử dụng ShortCut.pipe.ts - được khai báo ở Pipe.module.ts -->
              <!-- Có import PipeModule ở Home.module.ts -->
              <p>{{ film.moTa | shortcut: 100 }}</p>
              <a
                class="btn btn-success"
                routerLink="/details/{{ film.maPhim }}"
                [queryParams]="{ maPhim: film.maPhim, tenPhim: film.tenPhim }"
                >Xem chi tiết</a
              >
              <!-- property binding -->
              <a
                class="btn btn-success"
                [routerLink]="['/details', film.maPhim]"
                >Xem chi tiết 2</a
              >

              <!-- Mở popup -->
              <button
                data-toggle="modal"
                data-target="#modelId"
                class="btn btn-primary"
                (click)="xemChiTiet(film)"
              >
                Xem chi tiết (Popup)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  films: Films[] = [];

  // constructor là DI: Dependency injection
  constructor(private filmService: FilmsService, private store:Store) {}

  // ngOnInit là 1 lifecycle giống componentDidMount
  ngOnInit() {
    //   subscribe giống then với catch
    this.filmService.getFilms().subscribe(
      (result) => {
        this.films = result.content;
        console.log('result', result);
      },
      (errors) => {
        console.log('errors', errors);
      }
    );
  }

  xemChiTiet(film: any) {
    // dùng observable của Angular - behavior
    // dùng "next" để gửi data từ component về state Modal
    // và overwrite lại data Modal ở store Modal
    // -- Cách 1: viết next ở component
    // this.filmService.storeModal.next(film)
    // ---
    // -- Cách 2: viết next ở store
    // this.filmService.xemChiTiet(film);

    // Cách 3: dùng ngrx store (bản chất đều là observable)
    this.store.dispatch({ type: 'XEM_CHI_TIET', film: film });
  }
}
