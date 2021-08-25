import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListeClientsByComService {

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

  getListOfClients(commercialId: any){

    return this.httpClient.get(this.baseUrl+
      "/api/commercials/"+commercialId+"/clients",
      { headers: this.headers })
  }
}
