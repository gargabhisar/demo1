import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, finalize, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { WebAPIService } from './web-api.service';

@Injectable()
export class CommonInterceptorInterceptor implements HttpInterceptor {

  auth_token: string;
  constructor(private webapi: WebAPIService, public router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //this.SpinnerService.show(); 
    this.auth_token = this.webapi.getToken();
    const tokenized_request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`
      }
    });

    return next.handle(tokenized_request).pipe(
      catchError((error) => {
        // console.log('error is intercept')
        // console.error(error);
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error("Error Event");
          } else {
            console.log(`error status : ${error.status} ${error.statusText}`);
            switch (error.status) {
              case 401:      //login
                this.router.navigateByUrl("/auth/login");
                break;
              case 403:     //forbidden
                this.router.navigateByUrl("/unauthorized");
                break;
            }
          }
        } else {
          console.error("some thing else happened");
        }
        return throwError(error.message);
      }),
      finalize(
        () => {
          //this.SpinnerService.hide();
        }
      ) 
    )
  }
}
