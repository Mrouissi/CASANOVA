import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Commercial } from './commercial';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  // baseUrl: string = environment.backend.baseURL;
  baseUrl = 'http://localhost:8080/api/';

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   });

  constructor(private httpClient: HttpClient) {}
  registerCommercial(newCommercial: Commercial): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'commercials', {
      nom: newCommercial.nom,
      prenom: newCommercial.prenom,
      tel_portable: newCommercial.tel_portable,
      password: newCommercial.password,
      email: newCommercial.email,
      agence: newCommercial.agence
    }, {headers: this.headers });

    console.warn('un seul mot' + newCommercial);
  }

  createClientPassword (password: string, email: string): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'clients/' + email, {
      password: password,
    }, {headers: this.headers });

  }
}

