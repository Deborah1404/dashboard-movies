import { Category } from './../../../models/category.model';
import { CategoriesService } from './../../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoriesadd',
  templateUrl: './categoriesadd.component.html',
  styleUrls: ['./categoriesadd.component.scss']
})
export class CategoriesaddComponent implements OnInit {

  category: Category = new Category();

  constructor(
    private categoryService: CategoriesService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.category.name = '';
  }

  onSave() {
    this.categoryService.save(this.category)
      .subscribe(
        (data: Category) => {
          this.router.navigate(['/categories']);
        }
      );
  }

}
