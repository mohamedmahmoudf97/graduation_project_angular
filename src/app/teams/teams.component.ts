import { Component, OnInit } from '@angular/core';
import {TeamsService} from '../teams.service';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
teams_container = [];
  constructor(_TeamsService:TeamsService) 
  {
    _TeamsService.getTeams().subscribe(_team => this.teams_container = _team);
   }

  ngOnInit() {
  }

}
