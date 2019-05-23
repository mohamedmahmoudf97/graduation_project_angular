import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  constructor(public _http:HttpClient) {
  }
getMatche():Observable<any>
{
 return this._http.get("http://front-end-fresh.com/matche.php")
}

}
