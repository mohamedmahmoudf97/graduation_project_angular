import { Component, OnInit } from '@angular/core';
import {CountryService} from '../country.service';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
country_container = [];
  constructor(_CountryService:CountryService) 
  {
    _CountryService.getCountry().subscribe(_country => this.country_container = _country);
   }

  ngOnInit() {
  }

}
