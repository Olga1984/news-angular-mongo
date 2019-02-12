import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-edit-component',
  templateUrl: './news-edit-component.component.html',
  styleUrls: ['./news-edit-component.component.css']
})
export class NewsEditComponent implements OnInit {
  article: any = {
    "author": "BBC News",
    "title": "Deal reached to avert new US shutdown",
    "description": "The tentative agreement on border security breaks a longstanding stalemate in Congress.",
    "url": "http://www.bbc.co.uk/news/world-us-canada-47207411",
    "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7A23/production/_97176213_breaking_news_bigger.png",
    "publishedAt": "2019-02-12T02:06:04Z"
  };

  constructor() {
  }

  ngOnInit() {
  }

  delete(article): void {
    console.log('delete');
  }

  update() {
    console.log('update');
  }
}
