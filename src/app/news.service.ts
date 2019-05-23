import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(public _http:HttpClient) { }
  getnews():Observable<any>
{
  return this._http.get("http://front-end-fresh.com/newsjson.php")
}
}
