import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  fake_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2Q1MThhMTMzZTRiMDVkYmRjZTY4NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTc0MzU1MiwiZXhwIjoxNjgxNzQ3MTUyfQ.AD_wjvtiSTWit0leR8HKCGalAOYJCHkmmPBeGE_sDYs';
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      headers: request.headers.set('authorization', this.authService.token || this.fake_token),
    });

    return next.handle(request);
  }
}

export const AuthInterceptorProvaider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
