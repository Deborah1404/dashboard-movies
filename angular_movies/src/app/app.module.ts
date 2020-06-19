import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategorieslistComponent } from './components/categories/categorieslist/categorieslist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CategoriesaddComponent } from './components/categories/categoriesadd/categoriesadd.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategorieseditComponent } from './components/categories/categoriesedit/categoriesedit.component';
import { GenderslistComponent } from './components/genders/genderslist/genderslist.component';
import { GendersaddComponent } from './components/genders/gendersadd/gendersadd.component';
import { GenderseditComponent } from './components/genders/gendersedit/gendersedit.component';
import { CountrieslistComponent } from './components/countries/countrieslist/countrieslist.component';
import { CountriesaddComponent } from './components/countries/countriesadd/countriesadd.component';
import { CountrieseditComponent } from './components/countries/countriesedit/countriesedit.component';
import { ActorslistComponent } from './components/actors/actorslist/actorslist.component';
import { ActorsaddComponent } from './components/actors/actorsadd/actorsadd.component';
import { ActorseditComponent } from './components/actors/actorsedit/actorsedit.component';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    DashboardComponent,
    CategorieslistComponent,
    CategoriesaddComponent,
    CategorieseditComponent,
    GenderslistComponent,
    GendersaddComponent,
    GenderseditComponent,
    CountrieslistComponent,
    CountriesaddComponent,
    CountrieseditComponent,
    ActorslistComponent,
    ActorsaddComponent,
    ActorseditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule,
    CommonModule,
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]

})
export class AppModule { }
