import { Component, OnInit, NgModule} from '@angular/core';
import {NewsService} from '../news.service';
import {MatchesService} from '../matches.service';
import {TeamsService} from '../teams.service';
import {CountryService} from '../country.service';
import {StadiumService} from '../stadium.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  news_container = [];
  matches_container = [];
  teams_container = [];
  country_container = [];
  stad_container = [];
  constructor( _NewsService:NewsService , _MatchesService:MatchesService , _TeamsServices:TeamsService, _countryService:CountryService ,_stadiumService:StadiumService) { 
    _NewsService.getnews().subscribe( _news => this.news_container = _news); 
    _MatchesService.getMatche().subscribe(_match => this.matches_container = _match );
    _TeamsServices.getTeams().subscribe(_team => this.teams_container = _team);
    _countryService.getCountry().subscribe(_country => this.country_container = _country);
    _stadiumService.getstadium().subscribe(_stad => this.stad_container =  _stad);
  }
  ngOnInit() {
     
   
  }

 
 
}
