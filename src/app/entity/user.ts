export class User{
    name:String="";
    email:String="";
    password:String="";
    role:String="";
    admin:boolean=false;
    confirmed:boolean=false;

    constructor(email: String,password: String,name?: String,admin?:boolean){
        if (typeof admin!== 'undefined' && admin!==null)
            this.admin=admin;
        admin?this.role="Admin":this.role="User";
        if(typeof name!='undefined')
            this.name=name;
        this.email=email;
        this.password=password;
    }
}