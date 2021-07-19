import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //baseUrl: string = environment.backend.baseURL;
  baseUrl: string = "http://localhost:8080";

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   })
       constructor(private httpClient: HttpClient) {}

  public login(email: string, password: string): Observable<any> {

    return this.httpClient.post(this.baseUrl+
      "/api/login",
      {"email":email,"password":password},
      { headers: this.headers })
  }
}
