
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country.model';
import { Observable, Observer } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

   /**
   * Find all countries.
   */
  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('http://localhost:3000/countries')
  }

  /**
   * Add country
  */
  save(country: Country): Observable<Country> {
  return this.http.post<Country>('http://localhost:3000/countries', country);
  }
  /**
   * Update country
   */

  update(country: Country): Observable<Country> {
    return this.http.put<Country>('http://localhost:3000/countries/' +country.id, country);
  }
  /**
   * Delete Country
   */

  delete(id: string): Observable<Country> {
    return this.http.delete<any>('http://localhost:3000/countries/' + id)
  }
}
