
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { Observable, Observer } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

   /**
   * Find all categories.
   */
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/categories')
  }

   // ** Get Categories Count
   getCount(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/categories/count')
    
  }

  /**
   * Add category
  */
 save(category: Category): Observable<Category> {
  return this.http.post<Category>('http://localhost:3000/categories', category);
}

getActorDetail(id: string): Observable<Category> {
  return this.http.get<any>('http://localhost:3000/categories/' + id)
  
}
  /**
   * Edit Category
   */
  update(category: Category): Observable<Category> {
    return this.http.put<Category>('http://localhost:3000/categories/' +category.id, category);
  }

  /** Delete Category
   * 
   */

  delete(id: string): Observable<Category> {
    return this.http.delete<any>('http://localhost:3000/categories/' + id)
  }
}
