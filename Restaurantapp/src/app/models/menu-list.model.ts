import { Menu } from "./menu.model";

export class MenuList {
    count: number;
    results: Menu;
//MenuList results ima niz sa jednim objektom, zato ide u uglaste nula!!!
    constructor(obj?:any) {
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && new Menu(obj.results[0]) || new Menu();
    }
}