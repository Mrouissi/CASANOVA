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
   headersE = new HttpHeaders({
    'content-type': 'application/octet-stream',
    'Access-Control-Allow-Origin': '*'
   })
   

  constructor(private httpClient: HttpClient) { }

  public getListOfUsers() {
    return this.httpClient.get(
      "/api/api/users",
      { headers: this.headers })
  }
  
  public export() {
    return this.httpClient.get(
      "/api/api/client/export/excel",
      { headers: this.headersE })
  }
}
