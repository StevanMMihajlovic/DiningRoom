import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './restaurants/pagination/pagination.component';
import { RatingsComponent } from './restaurants/ratings/ratings.component';
import { FormsModule } from '@angular/forms';
import { CuisinesComponent } from './cuisines/cuisines.component';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    NavbarComponent,
    PaginationComponent,
    RatingsComponent,
    CuisinesComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
