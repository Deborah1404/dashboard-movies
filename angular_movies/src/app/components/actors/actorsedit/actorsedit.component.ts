import { Router } from '@angular/router';
import { Actor } from './../../../models/actor.model';
import { ActorsService } from './../../../services/actors.service';
import { GendersService } from './../../../services/genders.service';
import { Country } from './../../../models/country.model';
import { Gender } from 'src/app/models/gender.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountriesService } from 'src/app/services/countries.service';


@Component({
  selector: 'app-actorsedit',
  templateUrl: './actorsedit.component.html',
  styleUrls: ['./actorsedit.component.scss']
})
export class ActorseditComponent implements OnInit {
  id: string;
  form: FormGroup;
  formData: FormData = new FormData();
  fileData: File = null;
  fileDataName: String = '';
  genders: Gender[] = [];
  countries: Country[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private gendersService: GendersService,
    private countriesService: CountriesService,
    private router: Router,
    private actorsService: ActorsService

  ) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.maxLength(30)]],
      firstname: ['', [Validators.maxLength(30)]],
      birth: [''],
      picture: [''],
      genderId: [''],
      countryId: [''],
    })

    this.gendersService.getGenders().subscribe(
      (data: Gender[]) => {
        this.genders = data;
      }
    )
    this.countriesService.getCountries().subscribe(
      (data: Country[]) => {
        this.countries = data;
      }
    )
  }
  onSubmit(): void {
    const formData = new FormData()
    if (this.fileData) { this.formData.append('picture', this.fileData); }
    if (this.form.get('name').value) { this.formData.append('name', this.form.get('name').value) }
    if (this.form.get('firstname').value) { this.formData.append('firstname', this.form.get('firstname').value) }
    if (this.form.get('birth').value) { this.formData.append('birth', this.form.get('birth').value) }
    if (this.form.get('genderId').value) { this.formData.append('genderId', this.form.get('genderId').value) }
    if (this.form.get('countryId').value) { this.formData.append('countryId', this.form.get('countryId').value) }

    
    this.actorsService.update(formData, this.id)
      .subscribe(
        (actor) => {
          this.router.navigate(['/actors']);
        }
      );
  }
  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.fileData = file;
      this.fileDataName = this.fileData.name;
    }
  }

}


// import { Component, OnInit } from '@angular/core';

// import { Router, ActivatedRoute } from '@angular/router';
// import { ActorsService } from '../../../services/actors.service';
// import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// import { CountriesService } from '../../../services/countries.service';
// import { Country } from '../../../models/country.model';
// import { Gender } from '../../../models/gender.model';
// import { GendersService } from '../../../services/genders.service';
// import { HttpClient } from '@angular/common/http';

// import {DatePipe} from '@angular/common';

// @Component({
//   selector: 'app-actorsedit',
//   templateUrl: './actorsedit.component.html',
//   styleUrls: ['./actorsedit.component.scss']
// })
// export class ActorsEditComponent implements OnInit {

//   countries: Country[];
//   genders: Gender[];
//   id: string;
//   file: File;
//   avatar: string;

//   actorForm = new FormGroup({
//     name: new FormControl(),
//     firstname: new FormControl(),
//     birth: new FormControl(),
//     picture: new FormControl(),
//     CountryId: new FormControl(),
//     GenderId: new FormControl(),
//   });

//   constructor(
//     private actorService: ActorsService,
//     private countriesService: CountriesService,
//     private gendersService: GendersService,
//     private router: Router,
//     private route: ActivatedRoute,
//     private datePipe: DatePipe,
//   ) {
//     this.route.params
//     .subscribe(params => this.id = params.id);
//   }

//   ngOnInit(): void {
//     this.getActorDetail(this.id);
//     this.getCountries();
//     this.getGenders();
//   }

//   // Get the actor
//   getActorDetail(id: string) {
//     this.actorService.getActorDetail(id)
//     .subscribe( data => {
//       console.log(data);
//       this.actorForm.patchValue({
//             name: data.name,
//             firstname: data.firstname,
//             birth: this.datePipe.transform(data.birth, 'yyyy-MM-dd'),
//             CountryId: data.country,
//             GenderId: data.gender,
//       });
      
//     });
//   }

//   getCountries(){
//     this.countriesService.getCountries()
//     .subscribe(data => this.countries = data);
//   }

//   getGenders(){
//     this.gendersService.getGenders()
//     .subscribe(data => this.genders = data);
//   }

//   onFileChanged(event) {
//     this.file = event.target.files[0];
//   }

//   onSubmit() {
//     const formData = new FormData();
//     formData.append('name', this.actorForm.get('name').value);
//     formData.append('firstname', this.actorForm.get('firstname').value);
//     formData.append('birth', this.actorForm.get('birth').value);
//     formData.append('CountryId', this.actorForm.get('CountryId').value);
//     formData.append('GenderId', this.actorForm.get('GenderId').value);
//     if(this.file != undefined)
//     {
//       formData.append('picture', this.file, this.file.name);
//     }

//     this.actorService.update(formData, this.id)
//         .subscribe(actor => {
//           this.router.navigate(['/actors']);
//         });
//     }
// }