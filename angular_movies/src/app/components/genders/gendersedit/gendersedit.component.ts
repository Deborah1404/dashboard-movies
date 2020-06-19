import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { GendersService } from 'src/app/services/genders.service';
import { Gender } from 'src/app/models/gender.model';

@Component({
  selector: 'app-gendersedit',
  templateUrl: './gendersedit.component.html',
  styleUrls: ['./gendersedit.component.scss'],
})
export class GenderseditComponent implements OnInit {

  gender: Gender = new Gender();
  

  constructor(
    private gendersService: GendersService,
    private router: Router,
    private route: ActivatedRoute

    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( param => {
      this.gender.id = parseInt(param.get('id'))
      })
  }

  onEdit(){
    this.gendersService.update(this.gender)
     .subscribe(
         (gender: Gender)=> {
           this.router.navigate(['/genders']);
         }
       );
    }

}
