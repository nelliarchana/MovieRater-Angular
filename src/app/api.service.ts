import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Movie } from './modules/Movie';
import { CookieService} from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  headers= new HttpHeaders(
    {
      'Content-Type':'application/json',
    }
  );
  baseUrl='http://127.0.0.1:8000/';
  baseMovieUrl='http://127.0.0.1:8000/api/movie/';
  constructor(
    private httpClient:HttpClient,
    private cookieService:CookieService
  ) { }
  getmovies(){
    return this.httpClient.get<Movie[]>(this.baseMovieUrl,{headers:this.getAuthHeaders()});
   
  }
  getmovie(id:number){
    return this.httpClient.get<Movie>(`${this.baseMovieUrl}${id}/`,{headers:this.getAuthHeaders()});
   
  }
  createmovie(title:string ,description:string){
    const body=JSON.stringify({title,description});
    return this.httpClient.post(`${this.baseMovieUrl}`,body,{headers:this.getAuthHeaders()});
   
  }
  updatemovie(id: number,title:string ,description:string){
    const body=JSON.stringify({title,description});
    return this.httpClient.put(`${this.baseMovieUrl}${id}/`,body,{headers:this.getAuthHeaders()});
   
  }
  deletemovie(id: number){
    return this.httpClient.delete(`${this.baseMovieUrl}${id}/`,{headers:this.getAuthHeaders()});
   
  }

  ratemovies(rate:number,movieId:number){
    const body=JSON.stringify({stars:rate});
    return this.httpClient.post(`${this.baseMovieUrl}${movieId}/rate_movie/`,body,{headers:this.getAuthHeaders()});
   
  }
  loginUser(authData){
    const body=JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}auth/`,body,{headers:this.headers});
  }
  registerUser(authData){
    const body=JSON.stringify(authData);
    return this.httpClient.post(`${this.baseUrl}api/user/`,body,{headers:this.headers});
  }
  getAuthHeaders(){
    const token =this.cookieService.get('mr-token');
    return new HttpHeaders(
      {
        'Content-Type':'application/json',
        Authorization:`Token ${token}`
      }
    );
  }
}
