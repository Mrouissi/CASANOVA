import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListComptesService {

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   })
  

  constructor(private httpClient: HttpClient) { }

  public getListOfUsers() {
    return this.httpClient.get(
      "http://localhost:8080/api/users",
      { headers: this.headers })
  }
}
