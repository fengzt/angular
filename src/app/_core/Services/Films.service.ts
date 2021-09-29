// a-service
import { Injectable } from '@angular/core';

// import HttpClient : giống Axios - React
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TOKEN_CYBERSOFT } from '../Shared/Util/setting';

@Injectable({ providedIn: 'root' })
export class FilmsService {
  // ---
  // Thuộc tính quản lý dữ liệu của Modal popup (<app-modal></app-modal>)
  // --
  // storeModal đóng vai trò là store
  storeModal = new BehaviorSubject({
    maPhim: 1,
    tenPhim: 'default Behavior',
    hinhAnh: 'https://picsum.photos/200/200',
  });

  // dataModal đóng vai trò là state, sẽ observable từ store
  dataModal = this.storeModal.asObservable();

  xemChiTiet(film: any) {
    this.storeModal.next(film);
  }

  constructor(private httpClient: HttpClient) {} // Giống Axios

  getFilms(): Observable<any> {
    // Cấu hình header
    // Sau khi cấu hình interceptor có thể xóa
    // let header = new HttpHeaders();
    // header = header.set('TokenCybersoft', TOKEN_CYBERSOFT);

    let obser = this.httpClient.get(
      'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01'
      // { headers: header }
    );

    return obser;
  }

  getFilmsDetail(maPhim: number): Observable<any> {
    // Cấu hình header
    // Sau khi cấu hình interceptor có thể xóa
    // let header = new HttpHeaders();
    // header = header.set('TokenCybersoft', TOKEN_CYBERSOFT);

    let obser = this.httpClient.get(
      `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
      // { headers: header }
    );

    return obser;
  }
}
