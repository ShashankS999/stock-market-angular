export class Company{
    companyName:String="";
    turnover!:number;
    ceo:String="";
    boardOfDirectors:String="";
    companyBrief:String="";

    constructor(name:String,turnover:number,ceo:String,boardOfDirectors:String,brief:String){
        this.companyName=name;
        this.turnover=turnover;
        this.ceo=ceo;
        this.boardOfDirectors=boardOfDirectors;
        this.companyBrief=brief;
    }
}