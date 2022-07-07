import { HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl =
    'https://run.mocky.io/v3/d4b62bb6-3598-43a6-98d5-03b4ce11058f';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMsg = '';
    if (err.error instanceof ErrorEvent) {
      // A client side or network error occurred.
      errorMsg = ` An error occured :  ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code
      //The response body may contain clues as to what went wrong
      errorMsg = `Server returned code : ${err.status} , error message is : ${err.message}`;
    }
    console.error(errorMsg);
    return throwError(errorMsg);
  }
}
