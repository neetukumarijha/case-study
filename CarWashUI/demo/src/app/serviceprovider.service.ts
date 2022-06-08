import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CarDetails } from './carbooking/CarDetails';   
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ServiceproviderService {
  private baseUrl = 'https://localhost:7072/api/';
  private baseurl1 = 'https://localhost:7072/api/CarDetails/';
  constructor(private http: HttpClient, private router: Router) {}

  register(user: any): Observable<any> {
    console.log('success service');
    console.log(user);
    let url = this.baseUrl + 'ServiceLogins';
    return this.http.post(url, user);
  }

  login(userLogin: any): Observable<any> {
    let url = this.baseUrl + 'ServiceLogins';
    return this.http.post(url, userLogin);
  }

   /*getcardetails() {
    let url = this.baseUrl + 'getcardetails';
    return this.http.get(url);
   }*/
  getcardetails(details: any) {
    console.log('getting car details');
    let url = this.baseurl1 + 'getcardetails';
    return this.http.post(url, details);
  }
}
