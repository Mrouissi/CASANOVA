import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Commercial } from '../register/commercial';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListComService {

  baseUrl: string = environment.backend.baseURL;

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   })
   headersE = new HttpHeaders({
    'content-type': 'application/octet-stream',
    'Access-Control-Allow-Origin': '*'
   })
  router: any;
   

  constructor(private httpClient: HttpClient) { }
  
  public getListOfCom() {
    return this.httpClient.get(`${this.baseUrl}/api/commercials`,
      { headers: this.headers })
  }
  public delete(id: number): Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/api/commercials/${id}`)
  }

  public update (id: number): Observable<any>{
    return this.httpClient.put(`${this.baseUrl}/api/commercials/${id}`, { headers: this.headers } )
  }

}
