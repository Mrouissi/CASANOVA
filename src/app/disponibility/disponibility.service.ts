import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DisponibilityService {

  baseUrl: string = environment.backend.baseURL;

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   })
  

   
  constructor(private httpClient: HttpClient) { }

  public adddispo(cmd : string) {
    let id = JSON.parse(localStorage.getItem('idUser') || '')

    return this.httpClient.post(this.baseUrl+
      "/api/clients/"+ id +"/absences",
      cmd,
      { headers: this.headers })
  }
}
