import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   })
 
baseURL = "http://localhost:8080/api"
  constructor(private httpClient : HttpClient) { }
 
  getListAccomptes(){
    return this.httpClient.get(this.baseURL + '/users' , { 'headers': this.headers })
 
  }
}
