import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class RegisterClientService {

  baseUrl = 'http://localhost:8080/api/';

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private httpClient: HttpClient) {}

  registerClient(newClient: Client): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'registerclient', {
      nom: newClient.nom,
      prenom: newClient.prenom,
      tel_portable: newClient.tel_portable,
      email: newClient.email,
      civilite: newClient.civilite,
      ville: newClient.ville,
      code_postal: newClient.code_postal,
      dpt : newClient.dpt,
      adresse: newClient.adresse,
      tel_fixe: newClient.tel_fixe,
      commercial_user_id: newClient.commercial_user_id,
    }, {headers: this.headers});
  }
}
