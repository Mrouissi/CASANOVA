import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientCommandeService {

  baseUrl: string = environment.backend.baseURL;

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   })
   headersE = new HttpHeaders({
    'content-type': 'application/octet-stream',
    'Access-Control-Allow-Origin': '*'
   })
  constructor(private httpClient: HttpClient) {}

  public getAllAgence(){
    return this.httpClient.get(this.baseUrl+
      "/api/agences",
      { headers: this.headers })
  }

  public getAllEntiteVente(){
    return this.httpClient.get(this.baseUrl+
      "/api/entiteVente",
      { headers: this.headers })
  }
  
  public getAllOrigineContact(){
    return this.httpClient.get(this.baseUrl+
      "/api/originecontact",
      { headers: this.headers })
  }
  
  public getAllTypesTravaux(){
    return this.httpClient.get(this.baseUrl+
      "/api/typestravaux",
      { headers: this.headers })
  }
  public getAllElementARenover(){
    return this.httpClient.get(this.baseUrl+
      "/api/elementrenover",
      { headers: this.headers })
  }

  public getAllPrestations(){
    return this.httpClient.get(this.baseUrl+
      "/api/prestationrealiser",
      { headers: this.headers })
  }
  public getAllSupports(){
    return this.httpClient.get(this.baseUrl+
      "/api/supportexistant",
      { headers: this.headers })
  }
  
  public getListOfCom() {
    return this.httpClient.get(`${this.baseUrl}/api/commercials`,
      { headers: this.headers })
  }
}
