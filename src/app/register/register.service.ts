import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Commercial } from './commercial';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  //baseUrl: string = environment.backend.baseURL;
  baseUrl: string = "http://localhost:8080";

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   })

  constructor(private httpClient: HttpClient) {}

  public registerCommercial(newCommercial: Commercial) {
    console.warn(newCommercial);
    return this.httpClient.post(this.baseUrl+
      "/api/register/commercial",
      newCommercial,
      { headers: this.headers })
  }
}
