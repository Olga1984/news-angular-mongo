import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { News} from "./news";
import { HttpErrorHandler, HandleError } from '../http-rror-handler.service'

@Injectable()
export class NewsService {
private handleError: HandleError;

constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
  this.handleError = httpErrorHandler.createHandleError('NewsService');
}
getNews(): Observable<News[]>{
  return this.http
    .get<News[]>("api/news")
    .pipe(catchError(this.handleError("getNews", [])));
}
addArticle(article: News): Observable<News>{
  return this.http
    .post<News>("api/news", article)
    .pipe(catchError(this.handleError("addArticle", article)));
}
deleteNews(id: number): Observable<{}>{
  const url = `api/news/${id}`;
    return this.http
      .delete(url)
      .pipe(catchError(this.handleError("deleteNews")));
  }
  updateArticle(article: News): Observable<News>{
    return this.http
      .put<News>(`api/news/${article._id}`, article)
      .pipe(catchError(this.handleError("updateArticle", article)));
  }
}
