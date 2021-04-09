import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   })
  

  constructor(private httpClient: HttpClient) { }

  public updateUser(user:string) {
    let id = localStorage.getItem('idUser')
    return this.httpClient.put(
      "http://localhost:8080/api/clients/" + id,
      user,
      { headers: this.headers })
  }
}
