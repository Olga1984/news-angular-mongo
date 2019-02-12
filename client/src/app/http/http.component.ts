import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {News} from "../news/news";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  chanels: string[] = ['cnn', 'bbc-news', 'daily-mail', 'business-insider', 'mtv-news', 'hacker-news', 'the-guardian-uk', 'google-news', 'Bad Request!'];
  articles: any[] = [ ];
  filter: boolean = false;
  news: News[];
  constructor(private apiService: ApiService){}

  ngOnInit() {
  }
  onGet(chanel: string){
    this.apiService.getNews(chanel).subscribe(
      (articles: any) => {
        //console.log(servers)
        this.articles = articles;
      },
      (error) => console.log(error)
    )
  }
  onFilterChange(eve: any) {
    this.filter = !this.filter;
  }

}
