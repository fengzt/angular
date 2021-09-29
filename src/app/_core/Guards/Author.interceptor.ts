// a-http-interceptor-headers
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ACCESS_TOKEN, TOKEN_CYBERSOFT } from '../Shared/Util/setting';

// Guard: là cái khiên giúp bảo vệ backEnd (Angular gọi interceptor là Guard)

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let accessToken = '';
        if (localStorage.getItem(ACCESS_TOKEN)) {
            // Lưu ý: phải có dấu "!" - check logic có hoặc không của Angular
            accessToken = localStorage.getItem(ACCESS_TOKEN)!;
        }

        const headers = req.headers
            // Vì gửi đi nhiều định dạng nên không gửi JSON
            // .set('Content-Type', 'application/json')
            .set('accessToken', `Bearer ${accessToken}`)
            .set('TokenCybersoft', TOKEN_CYBERSOFT)
        const authReq = req.clone({ headers });
        return next.handle(authReq);
    }
}