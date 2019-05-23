import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StadiumService {

  constructor(public _http:HttpClient) { }
  getstadium():Observable<any>{
    return this._http.get("http://front-end-fresh.com/stadium.php")
  }
}
