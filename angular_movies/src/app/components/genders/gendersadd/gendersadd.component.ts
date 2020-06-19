import { Gender } from './../../../models/gender.model';
import { GendersService } from './../../../services/genders.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gendersadd',
  templateUrl: './gendersadd.component.html',
  styleUrls: ['./gendersadd.component.scss']
})
export class GendersaddComponent implements OnInit {

  gender: Gender = new Gender();

  constructor(
    private genderService: GendersService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.gender.name = '';
  }

  onSave() {
    this.genderService.save(this.gender)
      .subscribe(
        (data: Gender) => {
          this.router.navigate(['/genders']);
        }
      );
  }

}
