import { CategoriesService } from './../../../services/categories.service';
import { Category } from './../../../models/category.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-categorieslist',
  templateUrl: './categorieslist.component.html',
  styleUrls: ['./categorieslist.component.scss']
})
export class CategorieslistComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }
  ngOnInit(): void {
    this.categoriesService.getCategories() // renvoie un observable de categories, il faut donc souscrire
    .subscribe(
      (data: Category[]) => this.categories = data
    );
  }
  delete(id){
    this.categoriesService.delete(id).subscribe();
      this.categories = this.categories.filter(element => element.id !== id);
    }
}
