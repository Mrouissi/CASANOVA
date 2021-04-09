import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   })
   headersF = new HttpHeaders({
    'content-type': 'application/octet-stream',
    'Access-Control-Allow-Origin': '*'
   })
 
baseURL = "http://localhost:8080/api"
  constructor(private httpClient : HttpClient) { }
 
  getCompte(id:number){
    return this.httpClient.get(this.baseURL + '/clients/'+ id , { 'headers': this.headers })
 
  }

  downloadFile(id:number, idF:number){
    return this.httpClient.get(this.baseURL + '/dossiers/'+ id + '/files/' + idF , { 'headers': this.headersF })
 
  }
  uploadFile(id:number, data : string){
    return this.httpClient.post(this.baseURL + '/dossiers/'+ id + '/upload' , data ,  { 'headers': this.headers })

  }
}
