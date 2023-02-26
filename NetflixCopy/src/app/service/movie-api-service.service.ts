import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {



  constructor( private http:HttpClient) {}

baseurl="https://api.themoviedb.org/3";
apikey="7a42535d07bab5cf8947d3b0291eb0d3";
//08cc33bd5ae3a747598ce2ad84376e66


//bannerapiData
bannerApiData():Observable<any>
{
return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`)
}
//bannerapi='${this.baseurl}/trending/all/week?api_key=${this.apikey}'


tredingMovieApiData():Observable<any>
{
return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`)
}

//searchmovie
 getSearchMovie(data:any):Observable<any>
 {
console.log(data,'movie#')
   return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`)
 }

getMovieDetail(data:any):Observable<any>
{
console.log(data, "movie#")
  return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
}
//getMovieVideo
getMovieVideo(data:any):Observable<any>
{
  console.log(data, "movie#")
  return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
}

//getMovieCast
getMovieCast(data:any):Observable<any>
{
  console.log(data, "movie#")
  return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
}
}
