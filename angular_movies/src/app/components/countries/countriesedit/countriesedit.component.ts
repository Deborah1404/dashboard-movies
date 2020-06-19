import { Router, ActivatedRoute } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-countriesedit',
  templateUrl: './countriesedit.component.html',
  styleUrls: ['./countriesedit.component.scss']
})
export class CountrieseditComponent implements OnInit {

  country: Country = new Country();
  

  constructor(
    private countriesService: CountriesService,
    private router: Router,
    private route: ActivatedRoute

    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( param => {
      this.country.id = parseInt(param.get('id'))
      })
  }

  onEdit(){
    this.countriesService.update(this.country)
     .subscribe(
         (country: Country)=> {
           this.router.navigate(['/countries']);
         }
       );
    }

}
