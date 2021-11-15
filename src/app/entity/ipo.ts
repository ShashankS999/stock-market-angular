export class Ipo{
    openDateTime!:Date;
    pricePerShare!:number;
    totalShares!:number;

    constructor(openDateTime:Date,pricePerShare:number,totalShares:number){
        this.openDateTime=openDateTime;
        this.pricePerShare=pricePerShare;
        this.totalShares=totalShares;
    }
}