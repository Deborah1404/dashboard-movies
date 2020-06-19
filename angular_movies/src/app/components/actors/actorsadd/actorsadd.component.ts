// import { Router } from '@angular/router';
// import { ActorsService } from './../../../services/actors.service';
// import { Actor } from './../../../models/actor.model';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-actorsadd',
//   templateUrl: './actorsadd.component.html',
//   styleUrls: ['./actorsadd.component.scss']
// })
// export class ActorsaddComponent implements OnInit {

//   actor: Actor = new Actor();
  

//   constructor(
//     private actorsService: ActorsService,
//     private router: Router
//   ) { }

//   ngOnInit(): void {
//     this.actor.name = '';
//     this.actor.firstname = '';
//     this.actor.birth = new Date;
//     this.actor.picture = '';
//     this.actor.gender = '';
//     this.actor.country = '';
//   }
//   onSave(){
//     this.actorsService.save(this.actor)
//       .subscribe(
//         (data: Actor)=> {
//           this.router.navigate(['/actors']);
//         }
//       )
//   }

// }

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';
import { ActorsService } from '../../../services/actors.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CountriesService } from '../../../services/countries.service';
import { Country } from '../../../models/country.model';
import { Gender } from '../../../models/gender.model';
import { GendersService } from '../../../services/genders.service';
import { Actor } from '../../../models/actor.model';

@Component({
  selector: 'app-actorsadd',
  templateUrl: './actorsadd.component.html',
  styleUrls: ['./actorsadd.component.scss']
})
export class ActorsaddComponent implements OnInit {
  countries: Country[];
  genders: Gender[];
  file: File;

  actorForm = new FormGroup({
    name: new FormControl(),
    firstname: new FormControl(),
    birth: new FormControl(),
    picture: new FormControl(),
    CountryId: new FormControl(),
    GenderId: new FormControl(),
  });

  constructor(
    private actorsService: ActorsService,
    private countriesService: CountriesService,
    private gendersService: GendersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getCountries();
    this.getGenders();
  }

  getCountries(){
    this.countriesService.getCountries()
    .subscribe(data => this.countries = data);
  }

  getGenders(){
    this.gendersService.getGenders()
    .subscribe(data => this.genders = data);
  }

  onFileChanged(event) {
    this.file = event.target.files[0]
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.actorForm.get('name').value);
    formData.append('firstname', this.actorForm.get('firstname').value);
    formData.append('birth', this.actorForm.get('birth').value);
    formData.append('CountryId', this.actorForm.get('CountryId').value);
    formData.append('GenderId', this.actorForm.get('GenderId').value);
    if(this.file != undefined)
    {
      formData.append('picture', this.file, this.file.name);
    }
    
    this.actorsService.save(formData)
    .subscribe(actor => {
        this.router.navigate(['/actors']);
      }
    );
    }
}
