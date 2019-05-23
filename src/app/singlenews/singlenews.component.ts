import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsService} from '../news.service';
@Component({
  selector: 'app-singlenews',
  templateUrl: './singlenews.component.html',
  styleUrls: ['./singlenews.component.css']
})
export class SinglenewsComponent implements OnInit {
  
  constructor(private route:ActivatedRoute ,_NewsService :NewsService) {
    _NewsService.getnews().subscribe(news =>this.news_container = news);
   }
  news_container = [];
  
  id: number;
  index:any;

  ngOnInit(){
     this.id = + parseFloat(this.route.snapshot.paramMap.get('id'));
     this.index = +parseFloat(this.route.snapshot.paramMap.get('index'));
  }

    
}
