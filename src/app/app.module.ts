import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';



import { RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { MatchesComponent } from './matches/matches.component';
import { TeamsComponent } from './teams/teams.component';
import { CountryComponent } from './country/country.component';
import { StadiumComponent } from './stadium/stadium.component';
import { FooterComponent } from './footer/footer.component';
import { SinglenewsComponent } from './singlenews/singlenews.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NewsComponent,
    MatchesComponent,
    TeamsComponent,
    CountryComponent,
    StadiumComponent,
    FooterComponent,
    SinglenewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
