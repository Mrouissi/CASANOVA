import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   })
  

   
  constructor(private httpClient: HttpClient) { }

  public getAll() {
    let id = JSON.parse(localStorage.getItem('idUser') || '')
    return this.httpClient.get(
      "/api/api/clients/"+ id +"/dossiers",
      { headers: this.headers })
  }
}
