import {
    HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
<<<<<<< HEAD
import { UserAuthService } from '../_services/user-auth.service';
=======
import { UserAuthService } from '../_service/user-auth.service';
>>>>>>> f8d9c49ac489eac1ab8655924375229386ecee0a
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userAuthService: UserAuthService,
    private router:Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.headers.get('No-Auth') === 'True') {
      return next.handle(req.clone());
    }

    const token = this.userAuthService.getToken();

<<<<<<< HEAD
    if(token) {
      req = this.addToken(req, token);
    }
    
=======
    req = this.addToken(req, token);

>>>>>>> f8d9c49ac489eac1ab8655924375229386ecee0a
    return next.handle(req).pipe(
        catchError(
            (err:HttpErrorResponse) => {
                console.log(err.status);
                if(err.status === 401) {
                    this.router.navigate(['/login']);
                } else if(err.status === 403) {
                    this.router.navigate(['/forbidden']);
                }
<<<<<<< HEAD
=======
               
>>>>>>> f8d9c49ac489eac1ab8655924375229386ecee0a
                return throwError("Some thing is wrong");
            }
        )
    );
  }


  private addToken(request:HttpRequest<any>, token:string) {
      return request.clone(
          {
              setHeaders: {
                  Authorization : `Bearer ${token}`
              }
          }
      );
  }
}
