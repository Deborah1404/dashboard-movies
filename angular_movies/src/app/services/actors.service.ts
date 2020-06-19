
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actor } from '../models/actor.model';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http: HttpClient) { }

   /**
   * Find all actors.
   */
  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>('http://localhost:3000/actors')
  }

  // ** Get Actors Balance
  getBalance(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/actors/balance')
  }

  /**
   * Add actor
  */
  save(actor): Observable<Actor> {
  return this.http.post<Actor>('http://localhost:3000/actors', actor , {responseType: 'json'});
}

 // ** Get Actor
 getActorDetail(id: string): Observable<Actor> {
  return this.http.get<any>('http://localhost:3000/actors/' + id)
  
}
  update(actor, id: string): Observable<Actor> {
    return this.http.put<Actor>('http://localhost:3000/actors/' +actor.id, actor, {responseType: 'json'});
  }
  delete(id: string): Observable<Actor> {
    return this.http.delete<any>('http://localhost:3000/actors/' + id)
  }
}
