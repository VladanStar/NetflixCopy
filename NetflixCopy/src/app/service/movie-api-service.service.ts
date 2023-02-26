import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {



  constructor( private http:HttpClient) {}

baseurl:any="https://api:themoviedb.org/3";
apikey:any="7a42535d07bab5cf8947d3b0291eb0d3";


//bannerapiData
bannerApiData():Observable<any>
{
return this.http.get(`$(this.baseurl}/trending/all/week?api_key=${this.apikey})`)
}
//bannerapi='${this.baseurl}/trending/all/week?api_key=${this.apikey}'

}
