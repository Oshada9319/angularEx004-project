import { Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable} from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true}
  ]
})

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const dupReq = req.clone({ headers: req.headers.set('Acess-Control-Allow-Origin', 'http://my-json-server.typicode.com') });
    return next.handle(dupReq);
  }
}
export class InterceptorModule{}
