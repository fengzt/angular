import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLogin } from '../Models/UserLogin.model';
import { Observable } from 'rxjs';
import { TOKEN_CYBERSOFT } from '../Shared/Util/setting';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private httpClient: HttpClient) {}
  dangNhap(user: UserLogin): Observable<any> {
    // Cấu hình header
    let header = new HttpHeaders();
    header = header.set('TokenCybersoft', TOKEN_CYBERSOFT);

    let obser = this.httpClient.post(
      'https://movienew.cybersoft.edu.vn/api/quanlynguoidung/dangnhap',
      user,
      { headers: header }
    );

    return obser;
  }
}
