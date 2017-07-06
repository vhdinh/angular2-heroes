import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService } from './in-memory-data.service';

import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from './hero-detail.component';
import {AppComponent} from './app.component';
import {HeroService} from './hero.service';
import {DashboardComponent} from './dashboard.component';
import {HeroSearchComponent} from './hero-search.component';
import {Ng2DragDropModule} from "ng2-drag-drop";




@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    Ng2DragDropModule,
],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
