import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { HttpErrorHandler } from './http-rror-handler.service';
import { MessageService } from './message.service';
import { NewsEditComponent } from './news-edit-component/news-edit-component.component';
import { MainComponent } from './main/main.component';
import {HttpComponent} from "./http/http.component";

const AppRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'create', component: NewsComponent},
  {path: 'edit', component: NewsEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsEditComponent,
    MainComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(AppRoutes), FormsModule, HttpClientModule
  ],
  providers: [MessageService, HttpErrorHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
