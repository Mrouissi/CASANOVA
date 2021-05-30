import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  baseUrl: string = environment.backend.baseURL;

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   })
  

   
  constructor(private httpClient: HttpClient) { }

  public getAll() {
    let id = JSON.parse(localStorage.getItem('idUser') || '')
    return this.httpClient.get(this.baseUrl+
      "/api/clients/"+ id +"/dossiers",
      { headers: this.headers })
  }
}
