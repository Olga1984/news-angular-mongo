import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {NewsService} from "../news/news.service";
import {News} from "../news/news";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
 // providers: [NewsService]
})
export class MainComponent implements OnInit {
  articles: any[] = [ ];
  constructor(private apiService: ApiService){}

  ngOnInit() {
  }

  // onGet(){
  //   this.apiService.getNews().subscribe(
  //     (articles: any) => {
  //       //console.log(servers)
  //       this.articles = articles;
  //     },
  //     (error) => console.log(error)
  //   )
  // }
  // news: News[];
  // editArticle: News;
  // constructor(private newsService: NewsService) { }
  //
  // ngOnInit() {
  //   this.getNews();
  // }
  // getNews() :void {
  //   this.newsService.getNews().subscribe(news => (this.news = news));
  // }
  // add(title:string): void {
  //   this.editArticle = undefined;
  //   title = title.trim();
  //   if(!title){
  //     return;
  //   }
  //   const newArticle: News = {title} as News;
  //   this.newsService.addArticle(newArticle).subscribe(article => this.news.push(article));
  // }
  // delete(article: News): void {
  //   this.news = this.news.filter(h=>h !== article);
  //   this.newsService.deleteNews(article._id).subscribe();
  // }
  // edit(article){
  //   this.editArticle = article;
  // }
  // update(){
  //   if(this.editArticle) {
  //     this.newsService.updateArticle(this.editArticle).subscribe(article => {
  //       const ix = article ? this.news.findIndex(h=>h._id === article._id) : -1;
  //       if(ix > -1){
  //         this.news[ix] = article;
  //       }
  //     });
  //     this.editArticle = undefined;
  //   }
  // }
}
