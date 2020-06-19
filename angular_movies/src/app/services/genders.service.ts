
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gender } from '../models/gender.model';
import { Observable, Observer } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GendersService {

  constructor(private http: HttpClient) { }

   /**
   * Find all genders.
   */
  getGenders(): Observable<Gender[]> {
    return this.http.get<Gender[]>('http://localhost:3000/genders')
  }

  /**
   * Add gender
  */
  save(gender: Gender): Observable<Gender> {
  return this.http.post<Gender>('http://localhost:3000/genders', gender);
  }
  /**
   * Update gender
   */

  update(gender: Gender): Observable<Gender> {
    return this.http.put<Gender>('http://localhost:3000/genders/' +gender.id, gender);
  }
   /** Delete Category
   * 
   */

  delete(id: string): Observable<Gender> {
    return this.http.delete<any>('http://localhost:3000/genders/' + id)
  }
}
