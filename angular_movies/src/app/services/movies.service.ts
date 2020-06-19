import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Movie } from '../models/movie.model';
import { ErrorService } from './error.service';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient, private errorService: ErrorService) { }

  // ** Get Movies
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:3000/movies')
   
  }

  // ** Get Best movies
  getBestMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('http://localhost:3000/movies/best')
    .pipe(
      tap(data => data),
      catchError(this.errorService.handleError('getBestMovies', []))
    );
  }

  // Get Number movie by year
  getYears(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/movies/years')
   
  }

  // Get Average Note
  movieAverage(): Observable<any> {
    return this.http.get<number>('http://localhost:3000/movies/average')
   
  }

   // ** Get Movie
   getMovieDetail(id: string): Observable<Movie> {
    return this.http.get<any>('http://localhost:3000/movies/' + id)
    
  }

  // POST :  Add a movie
  addMovie(movie): Observable<Movie> {
    return this.http.post<Movie>('http://localhost:3000/movies/add', movie, {responseType: 'json'})
   
  }

  // PUT :  Edit a movie
  editMovie(movie, id: string): Observable<Movie> {
    return this.http.put<Movie>('http://localhost:3000/movies/edit/' + id, movie, {responseType: 'json'})
   
  }

      /** DELETE: delete one movie */
      deleteMovie(id: string): Observable<Movie> {
        const url = 'http://localhost:3000/movies/delete/' + id;
        return this.http.delete<any>(url)
       
      }

      addActor(actor:string[], id:string):Observable<any>{
        const url = 'http://localhost:3000/movies/actor/' + id;
        return this.http.post<Movie>(url, {"actorId":actor}, {responseType: 'json'})
      
      }


}