import { Component, OnInit } from '@angular/core';
import { RestaurantList } from '../models/restaurant-list.model';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-cuisines',
  templateUrl: './cuisines.component.html',
  styleUrls: ['./cuisines.component.css']
})
export class CuisinesComponent implements OnInit {

  restaurants: RestaurantList = new RestaurantList();
  kuhinje: string[] = [];

  constructor(private service: RestaurantService) { }

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants():void{
    this.service.getRestaurants().subscribe((data: RestaurantList) => {
      this.restaurants = data;
      for(let i of this.restaurants.results){
        if(this.kuhinje.indexOf(i.cuisine)==-1){
          this.kuhinje.push(i.cuisine);
        }
      }
    })
  }

}
