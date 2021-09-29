import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt-qlsp',
  template: `
    <div class="container">
      <div class="card">
        <div class="card-header bg-dark text-white">Thêm sản phẩm</div>
        <div class="card-body">
          <div class="form-group">
            <p>Mã sản phẩm</p>
            <input class="form-control" [(ngModel)]="sanPham.maSanPham" />
          </div>
          <div class="form-group">
            <p>Tên sản phẩm</p>
            <input class="form-control" [(ngModel)]="sanPham.tenSanPham" />
          </div>
          <div class="form-group">
            <p>Giá</p>
            <input class="form-control" [(ngModel)]="sanPham.gia" />
          </div>
          <div class="card-footer text-left">
            <button class="btn btn-outline-danger" (click)="themSanPham()">
              Thêm sản phẩm
            </button>
          </div>
        </div>
        <div class="card mt-2">
          <div class="card-header bg-dark text-white font-weight-bold">
            Danh sách sản phẩm
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>Mã sản phẩm</th>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Giá</th>
              </tr>
            </thead>
            <tbody>
              <tr
                [ngClass]="{
                  'bg-primary': (index + 1) % 2 == 0,
                  'bg-success': (index + 1) % 2 !== 0
                }"
                *ngFor="let sp of mangSanPham; let index = index"
              >
                <td>{{ sp.maSanPham }}</td>
                <td>
                  <img [src]="sp.hinhAnh" alt="..." width="50" height="50" />
                </td>
                <td>{{ sp.tenSanPham }}</td>
                <td>{{ sp.gia }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
})
export class BaiTapQLSPComponent implements OnInit {
  /*
        1. Render: sản phẩm ra giao diện
        2. Hiển thị xen kẽ màu sắc giữa các dòng sp
        3. Xây dựng chức năng thêm sp
    */

  sanPham: SanPham = { maSanPham: '', tenSanPham: '', gia: 0, hinhAnh: '' };

  // Mảng này chỉ lưu địa chỉ, chứ không lưu giá trị object
  // Khi thêm sp thứ 2 trở đi, sẽ làm thay đổi luôn giá trị thứ 1
  // => tạo new để giải quyết {...this.sanPham}
  mangSanPham: SanPham[] = [
    {
      maSanPham: '1',
      tenSanPham: 'AAA',
      gia: 1000,
      hinhAnh: 'https://i.pravatar.cc?u=feng',
    },
    {
      maSanPham: '2',
      tenSanPham: 'BBB',
      gia: 2000,
      hinhAnh: 'https://i.pravatar.cc?u=BBB',
    },
    {
      maSanPham: '3',
      tenSanPham: 'CCC',
      gia: 3000,
      hinhAnh: 'https://i.pravatar.cc?u=CCC',
    },
    {
      maSanPham: '4',
      tenSanPham: 'DDD',
      gia: 4000,
      hinhAnh: 'https://i.pravatar.cc?u=DDD',
    },
  ];

  constructor() {}

  ngOnInit() {}

  themSanPham() {
    let sanPhamMoi = {
      ...this.sanPham,
      hinhAnh: `https://i.pravatar.cc?u=${this.sanPham.tenSanPham}`,
    };
    // this.sanPham.hinhAnh = `https://i.pravatar.cc?u=${this.sanPham.tenSanPham}`;
    this.mangSanPham.push(sanPhamMoi);
  }
}

// https://ng.ant.design/components/overview/en
// https://material.angular.io/
// https://www.primefaces.org/primeng/
// directive là được viết sẵn, chỉ cần áp dụng vào angular

// directive là 1 control nhỏ được ứng dụng trên component
// React định nghĩa tất cả lên giao diện là component, không chỉa ra như angular (component, directive)

interface SanPham {
  maSanPham: string;
  hinhAnh: string;
  tenSanPham: string;
  gia: number;
}
