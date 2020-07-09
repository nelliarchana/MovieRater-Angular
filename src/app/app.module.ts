import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthModule} from './auth/auth.module';
import { MainModule} from './main/main.module';
import { AppComponent } from './app.component';
import { Routes,RouterModule} from '@angular/router';
import {  HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



const routes:Routes =[
  {path:'', pathMatch:'full', redirectTo:'auth'}
];

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AuthModule,
    MainModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
