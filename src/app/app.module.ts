import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestService } from './service/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { StockExchangeComponent } from './stock-exchange/stock-exchange.component';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchCompanyComponent } from './search-company/search-company.component';
import { ChartsComponent } from './charts/charts.component';
import { IpoDetailsComponent } from './ipo-details/ipo-details.component'

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    AdminComponent,
    StockExchangeComponent,
    CompanyComponent,
    LoginComponent,
    PageNotFoundComponent,
    SearchCompanyComponent,
    ChartsComponent,
    IpoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
