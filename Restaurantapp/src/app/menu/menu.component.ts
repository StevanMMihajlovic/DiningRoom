import { Component, Input, OnInit } from '@angular/core';
import { MenuList } from '../models/menu-list.model';
import { Restaurant } from '../models/restaurant.model';
import { RestaurantService } from '../services/restaurant.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() restaurant: Restaurant = new Restaurant();
  menu: MenuList = new MenuList();

  constructor(private service: RestaurantService) { }

  ngOnInit(): void {
    this.getMenus();
  }

  getMenus():void{
    this.service.getMenus(this.restaurant._id).subscribe((data: MenuList) => {
      this.menu = data;
    })
  }

}
