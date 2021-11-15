import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL="http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${baseURL}login`, data, {headers, responseType:'text'});
  }

  addUser(data: any): Observable<any> {
    return this.http.post(`${baseURL}addUser`, data);
  }

  addCompany(data: any,sect: any,ex:any): Observable<any> {
    return this.http.post(`${baseURL}addCompany/${sect}/${ex}`, data);
  }

  deactivateCompany(data: any): Observable<any> {
    return this.http.post(`${baseURL}deactivateCompany`, data);
  }

  saveStockPrice(data: any,name: any): Observable<any> {
    return this.http.post(`${baseURL}saveStockPrice/${name}`, data);
  }

  searchCompany(data: any): Observable<any> {
    return this.http.get(`${baseURL}searchCompany/${data}`);
  }

  addStockExchange(data: any): Observable<any> {
    return this.http.post(`${baseURL}addStockExchange`, data);
  }

  listStockExchange(): Observable<any> {
    return this.http.get(`${baseURL}listStockExchange`);
  }

  addIpo(data: any,name: any): Observable<any> {
    return this.http.post(`${baseURL}updateIpo/${name}`, data);
  }

  sharesByCompanyName(data: any): Observable<any> {
    return this.http.get(`${baseURL}sharesByCompanyName`, data);
  }

}
