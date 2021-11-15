import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ChartsComponent } from './charts/charts.component';
import { CompanyComponent } from './company/company.component';
import { IpoDetailsComponent } from './ipo-details/ipo-details.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchCompanyComponent } from './search-company/search-company.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StockExchangeComponent } from './stock-exchange/stock-exchange.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{path: 'login', component: LoginComponent},
{path: 'sign-up', component: SignUpComponent},
{path: 'stock-exchange', component: StockExchangeComponent},
{path: 'company', component: CompanyComponent},
{path: 'admin', component: AdminComponent},
{path: 'user', component: UserComponent},
{path: 'search-company', component: SearchCompanyComponent},
{path: 'charts', component: ChartsComponent},
{path: 'ipo-details', component: IpoDetailsComponent},
{path: '', redirectTo: '/login', pathMatch: 'full'},
{path: '**', component: PageNotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
