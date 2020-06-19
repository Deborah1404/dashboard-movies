import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-categoriesedit',
  templateUrl: './categoriesedit.component.html',
  styleUrls: ['./categoriesedit.component.scss']
})
export class CategorieseditComponent implements OnInit {

  category: Category = new Category();
  

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
    private route: ActivatedRoute

    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( param => {
      this.category.id = parseInt(param.get('id'))
      })
  }

  onEdit(){
    this.categoriesService.update(this.category)
     .subscribe(
         (category: Category)=> {
           this.router.navigate(['/categories']);
         }
       );
    }

}
