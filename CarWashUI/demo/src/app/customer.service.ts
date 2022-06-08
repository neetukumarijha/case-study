import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './User';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  [x: string]: any;

  private baseUrl = 'https://localhost:7072/api/';
  private baseurl1 = 'https://localhost:7072/api/CarDetails/';
  private baseUrl2 = 'https://localhost:7072/api/';
  constructor(private http: HttpClient, private router: Router) {}

  register(user: any): Observable<any> {
    console.log('success service');
    console.log(user);
    let url = this.baseUrl + 'Customers';
    return this.http.post(url, user);
  }

  login(userLogin: User): Observable<any> {
    let url = this.baseUrl + 'Customers';
    return this.http.get(url);
  }

  addCarDetails(car: any): Observable<any> {
    console.log('car service working');
    let url = this.baseurl1 + 'booking';
    return this.http.post(url, car);
  }
  carRating(ratings: any): Observable<any> {
    console.log('success rating');
    console.log(ratings);
    let url = this.baseUrl2 + 'CarserviceFeedbacks';
    return this.http.get(url);
  }
  logout() {}

  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  getCarDetail(details: any) {
    console.log('getting car details');
    let url = this.baseurl1 + 'getcardetails';
    return this.http.post(url, details);
  }
}
