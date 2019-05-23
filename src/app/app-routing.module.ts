import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {MatchesComponent} from './matches/matches.component';
import {NewsComponent} from './news/news.component';
import {StadiumComponent} from './stadium/stadium.component';
import {TeamsComponent} from './teams/teams.component';
import {CountryComponent} from './country/country.component';
import {SinglenewsComponent} from './singlenews/singlenews.component';
  import { from } from 'rxjs';
const routes: Routes = [
  {path:'',component:HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'Matches', component:MatchesComponent },
  { path: 'News', component:NewsComponent },
  { path: 'Stadium', component:StadiumComponent },
  { path: 'Teams', component:TeamsComponent },
  { path: 'Country', component:CountryComponent },  
  { path: 'singlenews/:id/:index', component:SinglenewsComponent },
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
