import { CountriesService } from './../../../services/countries.service';
import { Country } from './../../../models/country.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-countrieslist',
  templateUrl: './countrieslist.component.html',
  styleUrls: ['./countrieslist.component.scss']
})
export class CountrieslistComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countriesService: CountriesService) { }
  ngOnInit(): void {
    this.countriesService.getCountries() // renvoie un observable de countries, il faut donc souscrire
    .subscribe(
      (data: Country[]) => this.countries = data
    );
  }
  delete(id){
    this.countriesService.delete(id).subscribe();
      this.countries = this.countries.filter(element => element.id !== id);
    }

}
