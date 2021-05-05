import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   })
  

   
  constructor(private httpClient: HttpClient) { }

  public login(email: string, password: string) {
    return this.httpClient.post(
      "/api/api/login",
      {"username":email,"password":password},
      { headers: this.headers })
  }
}
