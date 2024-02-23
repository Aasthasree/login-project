//Angular Imports
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
//RXJS imports
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authToken = localStorage.getItem('token');

    if (request.url.includes('/signin')) {
      request = this.addTokenHeader(request, authToken, 'refresh');
    } else if (authToken) {
      request = this.addTokenHeader(request, authToken);
    }

    return next.handle(request);
  }

  addTokenHeader(request: HttpRequest<unknown>, token: string, refresh?) {
    if (refresh) {
      return request.clone({
        setHeaders: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ZlUza2tJMVpjMWd3R2NzOTdiN2RRWUh6Z2VCUzNUSEJLd0tldlp2aDpVdUdHWE12MnFDNGViS3lLeVNSWW95MUlUSmQxZU9uNUVZWE9hcTZDbU91QVV2Y0FVSGVKcDJzdjF3VFpmWkdXeFNWcWZvUTFwd3dnTkdnWDRVRm15MEpmTTgxNFJzcHB3NExQaHJ5d0FobGVnbUxVMnhkYWtvbkZyMWtmYWJYaA=='
        }
      });
    }
    else {
      return request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
    }
  }

  }