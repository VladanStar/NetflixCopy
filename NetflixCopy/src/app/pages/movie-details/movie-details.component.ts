import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

getMovieDetailsResult:any;
constructor(private service:MovieApiServiceService, private  router:ActivatedRoute){}
ngOnInit(): void {
let getParamId=this.router.snapshot.paramMap.get('id');
console.log(getParamId,'getparamid#')
this.getMovie(getParamId)
}
getMovie(id:any){
this.service.getMovieDetail(id).subscribe((result)=>{
console.log(result,"getmoviedetails#");
this.getMovieDetailsResult=result;
})
}
}
