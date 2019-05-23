import { Component, OnInit } from '@angular/core';
import {MatchesService} from '../matches.service';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches_container = [];
  constructor(_MatchesService:MatchesService) { 
  _MatchesService.getMatche().subscribe(_match => this.matches_container = _match );
  }

  ngOnInit() {
  }

}
