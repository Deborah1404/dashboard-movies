import { Country } from './../../../models/country.model';
import { CountriesService } from './../../../services/countries.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countriesadd',
  templateUrl: './countriesadd.component.html',
  styleUrls: ['./countriesadd.component.scss']
})
export class CountriesaddComponent implements OnInit {

  country: Country = new Country();

  constructor(
    private countryService: CountriesService,
    private router: Router,

  ) { }

  ngOnInit(): void {
    this.country.name = '';
  }

  onSave() {
    this.countryService.save(this.country)
      .subscribe(
        (data: Country) => {
          this.router.navigate(['/countries']);
        }
      );
  }

}
