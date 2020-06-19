import { Movie } from './../../models/movie.model';
import { MoviesService } from './../../services/movies.service';
import { ActorsService } from './../../services/actors.service';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../../services/categories.service';
import { Category } from './../../models/category.model';
import { CountriesService } from './../../services/countries.service';
import { Country } from './../../models/country.model';
import { SingleDataSet } from 'ng2-charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  categories: Category[] = [];
  countries: Country[] = [];
  movies: Movie[];
  average: number;

  public barChartLabels = ['triller', 'drame', 'comedie'];
  public barChartData = [1, 2, 8];
  public barChartType = 'horizontalBar';
  public barChartColors= [
    {
      backgroundColor: [
        'rgba(110, 114, 20, 1)',
        'rgba(118, 183, 172, 1)',
        'rgba(0, 148, 97, 1)',
      ]
    }
  ];
  public barChartLegend = true;
  public barChartOption = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }


  public doughnutChartLabels = ['femme', 'homme', 'autre'];
  public doughnutChartData = [20, 75, 5];
  public doughnutChartType = 'doughnut';
  public doughnutColors = [
    {
      backgroundColor: [
        'rgba(110, 114, 20, 1)',
        'rgba(118, 183, 172, 1)',
        'rgba(0, 148, 97, 1)',
      ]
    }
  ];

  constructor(
    private categoriesService: CategoriesService,
    private countriesService: CountriesService,
    private actorsService: ActorsService,
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.categoriesService.getCategories() // renvoie un observable de categories, il faut donc souscrire
      .subscribe(
        (data: Category[]) => this.categories = data
      );
    this.countriesService.getCountries() // renvoie un observable de countries, il faut donc souscrire
      .subscribe(
        (data: Country[]) => this.countries = data
      );

    this.getCount()

    this.getBalance();

    this.getMovies();

    this.movieAverage();
  }

  getCount() {
    this.categoriesService.getCount()
      .subscribe(data => {
        this.barChartLabels = data.map(movie => movie.data);
        this.barChartData = data.map(movie => movie.value);
      });
  }
  getBalance() {
    this.actorsService.getBalance()
      .subscribe(data => {
        this.doughnutChartLabels = data.map(gender => gender.data);
        this.doughnutChartData = data.map(gender => gender.value);
      });
  }
  getMovies() {
    this.moviesService.getBestMovies()
      .subscribe(data => this.movies = data);
  }

  movieAverage() {
    this.moviesService.movieAverage()
      .subscribe(data => this.average = data[0].value);
  }

}

