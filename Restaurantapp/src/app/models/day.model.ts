export class Day {
    closes: string;
    opens: string;

   constructor(obj?:any) {
       this.closes = obj && obj.closes || "";
       this.opens = obj && obj.opens || ""; 
   }
}