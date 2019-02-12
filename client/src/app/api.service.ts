import { Injectable } from '@angular/core';
import { HttpClient } from "../../node_modules/@angular/common/http";
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient){}

  getNews(channel){
    return this.http.get<any>(`https://newsapi.org/v1/articles?source=${channel}&apiKey=8b0ecc14a33147d4ad63d53efee42cb8`)
    .pipe(
        map((response: any) => {
            console.log('response', response);
            // const data = response.json();
            return response.articles;
          })
    );
  }
}
