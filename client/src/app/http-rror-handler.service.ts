import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

export type HandleError = <T>(
  operation?:string,
  result? : T
) => (errror: HttpErrorResponse) => Observable<T>

  @Injectable()
  export class HttpErrorHandler {
  constructor(private messageService: MessageService) {
  }
  createHandleError = (serviceName = "") => <T>(
    operation = "operation",
      result = {} as T
  ) => this.handleError(serviceName, operation, result);

  handleError<T>(serviceName="", operation="operation", result = {} as T) {
    return(errror: HttpErrorResponse) : Observable<T> => {
      console.error(errror);

      const message =
        errror.error instanceof ErrorEvent
      ? errror.error.message
          : `server returned code ${errror.status} with body "${errror.error}"`;

      this.messageService.add(
        `${serviceName}: ${operation} failed ${message}`
      );
      return of(result);
    };
  }
}
