import { NgModule ,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule} from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {ApiService} from '../api.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule} from '@angular/forms';


import { MainComponent } from './main.component';

const routes:Routes =[
  {path:'movies', component: MainComponent}
];


@NgModule({
  declarations: [
    MainComponent,
    MovieListComponent,
    MovieFormComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule,
  ],
  providers:[
    ApiService
  ],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]

})
export class MainModule { 

}
