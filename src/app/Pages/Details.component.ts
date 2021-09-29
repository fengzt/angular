import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../_core/Services/Films.service';

@Component({
  selector: 'app-details',
  template: `
    <div class="container text-center">
      Mã phim: {{ maPhim }}
      <br />
      <img src="{{ filmDetail.hinhAnh }}" alt="..." />
    </div>
  `,
})
export class DetailsComponent implements OnInit {
  maPhim: number = 0;

  // bài bản thì phải khai 1 đối tượng FilmDetail ở Films.ts, rồi import vào
  filmDetail: any = {};
  // ActivedRoute dùng để lấy param từ url (giống propsRoute)
  // params FilmsService được lấy từ Films.service.ts
  constructor(
    private avtRoute: ActivatedRoute,
    private filmService: FilmsService,
    private title: Title
  ) {}

  ngOnInit() {
    // Gắn với Xem chi tiết 2
    // this.avtRoute.params.subscribe((params) => {
    //   this.maPhim = params.id;

    //   // Sau khi lấy tham số từ url => gọi serivce
    //   this.layThongTinPhim(this.maPhim);
    // });

    // Cách truyền từ 2 tham số trở lên => dùng queryParams
    this.avtRoute.queryParams.subscribe((params) => {
      this.layThongTinPhim(params.maPhim);
      this.title.setTitle(params.tenPhim);
    });
  }

  layThongTinPhim(maPhim: number) {
    this.filmService.getFilmsDetail(maPhim).subscribe(
      (result) => {
        this.filmDetail = result.content;
        console.log('result', result);
      },
      (errors) => {
        console.log('errors', errors);
      }
    );
  }
}
