import { Component, OnInit } from '@angular/core';
import {StadiumService} from '../stadium.service';
@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.css']
})
export class StadiumComponent implements OnInit {
stadium_container = [];
  constructor(_StadiumService:StadiumService) {
    _StadiumService.getstadium().subscribe(_stad => this.stadium_container = _stad);
   }

  ngOnInit() {
  }

}
