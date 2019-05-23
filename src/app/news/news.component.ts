import { Component, OnInit } from '@angular/core';
import {NewsService} from '../news.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
news_container = [];
  constructor( _NewsService:NewsService) {
    _NewsService.getnews().subscribe(_news => this.news_container = _news);
   }

  ngOnInit() {
  }

}
