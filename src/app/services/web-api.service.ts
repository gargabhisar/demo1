import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebAPIService {

  private base_url = "https://localhost:44367/";
  private UserLogin_url = "Login/AuthorLogin";
  
  constructor(private http: HttpClient, private router: Router) { }

  getToken() {
    let result = JSON.parse(sessionStorage.getItem('result') || '{}');
    return result.token;
  }

  login(logindetails: any) {
    let obs = this.http.post(this.base_url + this.UserLogin_url, logindetails);
    return obs;
  }
}
