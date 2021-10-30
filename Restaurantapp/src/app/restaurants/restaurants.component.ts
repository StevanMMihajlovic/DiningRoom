import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantList } from '../models/restaurant-list.model';
import { RestaurantService } from '../services/restaurant.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from '../menu/menu.component';
import { Restaurant } from '../models/restaurant.model';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: RestaurantList = new RestaurantList();

  params = {
    page: 1,
    pageSize: 12,
    sort: "rating",
    sortDirection: "desc",
    filter: {priceFrom: 0, priceTo: 5, cuisine: ""}
  }

  constructor(private service: RestaurantService, private route: ActivatedRoute, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.params.filter.cuisine = data['cuisine'];
      this.getRestaurants();
    });
  }

  getRestaurants():void{
    this.service.getRestaurants(this.params).subscribe((data: RestaurantList) => {
      this.restaurants = data;
    })
  }

  pageChange(newPage:number):void{
    this.params.page = newPage;
    this.getRestaurants();
  }

  openDialog(x:Restaurant):void{
    const modalRef = this.modalService.open(MenuComponent);
    modalRef.componentInstance.restaurant = x;
  }

}
