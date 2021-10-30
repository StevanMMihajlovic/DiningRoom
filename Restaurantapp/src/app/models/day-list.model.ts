import { Day } from "./day.model"

export class DayList {
        "1": Day;
        "2": Day;
        "3": Day;
        "4": Day;
        "5": Day;
        "6": Day;
        "7": Day;

    constructor(obj?:any) {
        this[1] = obj && new Day(obj["1"]) || new Day();
        this[2] = obj && new Day(obj["2"]) || new Day();
        this[3] = obj && new Day(obj["3"]) || new Day();
        this[4] = obj && new Day(obj["4"]) || new Day();
        this[5] = obj && new Day(obj["5"]) || new Day();
        this[6] = obj && new Day(obj["6"]) || new Day();
        this[7] = obj && new Day(obj["7"]) || new Day();
    }
}