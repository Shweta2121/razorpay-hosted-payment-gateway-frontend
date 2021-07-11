import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RazorpayService {
  constructor(private http: HttpClient) { }

  getCustomer(data) {
    this.http.post('http://localhost:4500/create-customers', data).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }
  getSubscription(data) {
    this.http.post('http://localhost:4500/create-subscription', data).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      });
  }
  getPlans() {
    return this.http.get<any>('http://localhost:4500/fetch-plans');
  }
}
