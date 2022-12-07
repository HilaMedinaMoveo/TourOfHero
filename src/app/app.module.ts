import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';
 
import * as appComponent from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';


@NgModule({
  declarations: [
    appComponent.AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule
    // InMemoryDataService,
  ],
  // Add FormsModule to the imports array in @NgModule.
  // The imports array contains the list of external
  //  modules that the application needs.
  providers: [],
  
  bootstrap: [appComponent.AppComponent]
})
export class AppModule { }
