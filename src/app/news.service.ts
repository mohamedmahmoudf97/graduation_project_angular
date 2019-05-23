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
  return this._http.get("https://projecttest2.000webhostapp.com/project/web_service/news.php")
}
}
