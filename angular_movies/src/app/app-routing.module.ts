import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ActorseditComponent } from './components/actors/actorsedit/actorsedit.component';
import { ActorsaddComponent } from './components/actors/actorsadd/actorsadd.component';
import { ActorslistComponent } from './components/actors/actorslist/actorslist.component';
import { CountrieseditComponent } from './components/countries/countriesedit/countriesedit.component';
import { CountriesaddComponent } from './components/countries/countriesadd/countriesadd.component';
import { CountrieslistComponent } from './components/countries/countrieslist/countrieslist.component';
import { GenderseditComponent } from './components/genders/gendersedit/gendersedit.component';
import { GendersaddComponent } from './components/genders/gendersadd/gendersadd.component';
import { GenderslistComponent } from './components/genders/genderslist/genderslist.component';
import { CategoriesaddComponent } from './components/categories/categoriesadd/categoriesadd.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorieslistComponent } from './components/categories/categorieslist/categorieslist.component';
import { CategorieseditComponent } from './components/categories/categoriesedit/categoriesedit.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategorieslistComponent },
  { path: 'categories/add', component: CategoriesaddComponent },
  { path: 'categories/edit/:id', component: CategorieseditComponent},
  { path: 'genders', component: GenderslistComponent },
  { path: 'genders/add', component: GendersaddComponent },
  { path: 'genders/edit/:id', component: GenderseditComponent},
  { path: 'countries', component: CountrieslistComponent },
  { path: 'countries/add', component: CountriesaddComponent },
  { path: 'countries/edit/:id', component: CountrieseditComponent},
  { path: 'actors', component: ActorslistComponent },
  { path: 'actors/add', component: ActorsaddComponent },
  { path: 'actors/edit/:id', component: ActorseditComponent},
  { path: 'movies/average', component: DashboardComponent}
  

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
