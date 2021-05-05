import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'responseType': 'text'
   })
   headersU = new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
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
    return this.httpClient.get(this.baseURL + '/dossiers/'+ id + '/files/' + idF , { responseType:'text' })
 
  }

  uploadFile(id:number, data : File , cat : any ){
    const formData= new FormData()

    formData.append('file', data)

    return this.httpClient.post(this.baseURL + '/dossiers/'+ id + '/upload/' + cat ,   formData ,  {  reportProgress: true})

  }
}
