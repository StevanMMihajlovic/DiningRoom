import { DayList } from "./day-list.model";

export class Restaurant {
     name : string;
     cuisine : string;
     _id : number;
     description :  string;
     location : string;
     price : number;
     rating : number;
     days: DayList;

    constructor(obj?:any) {
        this.name = obj && obj.name || "";
        this.cuisine = obj && obj.cuisine || "";
        this._id = obj && obj._id || 0;
        this.description = obj && obj.description || "";
        this.location = obj && obj.location || "";
        this.price = obj && obj.price || 0;
        this.rating = obj && obj.rating || 0;
        this.days = obj && new DayList(obj.days) || new DayList();
        
    }
}