import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route:Router){}

  title = 'Stock Market Charting';

  routing():boolean{
    switch(this.route.url)
    {
      case "/stock-exchange":return true;
      case "/company":return true;
      case "/admin":return true;
      case "/user":return true;
      case "/search-company":return true;
      case "/charts":return true;
      case "/ipo-details":return true;
      default:return false;
    }
  }
  logout(){
    this.route.navigate(['login']);
  }

}
