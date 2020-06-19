import { CategoriesService } from './../../services/categories.service';
import { Category } from './../../models/category.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: Category[] = [];

  constructor(private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.categoryService.getCategories() // renvoie un observable de categories, il faut donc souscrire
    .subscribe(
      (data: Category[]) => this.categories = data
    );
  }

}
