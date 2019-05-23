import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(public _http:HttpClient) { }
  getCountry():Observable<any>
  {
    return this._http.get("http://front-end-fresh.com/country.php")
  }
  getStadium(){
    return this._http.get("http://front-end-fresh.com/stadium.php")
  }
}
