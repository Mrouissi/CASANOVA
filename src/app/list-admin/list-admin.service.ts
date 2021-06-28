import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListAdminService {

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

  public getListOfAdmin() {
    return this.httpClient.get(this.baseUrl+
      "/api/admins",
      { headers: this.headers })
  }
}
