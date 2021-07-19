import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Admin} from './admin';

@Injectable({
  providedIn: 'root'
})
export class RegisterAdminService {

  baseUrl = 'http://localhost:8080/api/';

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });

  constructor(private httpClient: HttpClient) {}

  registerAdmin(newAdmin: Admin): Observable<any> {
    return this.httpClient.post(this.baseUrl + 'registerAdmin', {
      nom: newAdmin.nom,
      prenom: newAdmin.prenom,
      tel_portable: newAdmin.tel_portable,
      password: newAdmin.password,
      email: newAdmin.email,
    }, {headers: this.headers });
  }
}
