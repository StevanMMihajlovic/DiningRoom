import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {

  @Input() grade:number = 0;
  @Input() type: string = "";

  full: number[] = [];
  empty: number[] = [];

  constructor() { }

  ngOnInit(): void {
    for(let i= 0; i<this.grade;i++){
      this.full.push(1);
    }
    for(let i= 0; i<(5-this.grade);i++){
      this.empty.push(1);
    }
  }

}
