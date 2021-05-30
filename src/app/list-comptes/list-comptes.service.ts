import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListComptesService {

  baseUrl: string = environment.backend.baseURL;

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
    return this.httpClient.get(this.baseUrl+
      "/api/users",
      { headers: this.headers })
  }
  
  public export() {
    return this.httpClient.get(this.baseUrl+
      "/api/client/export/excel",
      { headers: this.headersE })
  }
}
