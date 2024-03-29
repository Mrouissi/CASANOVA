import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

  getClientBoard(): Observable<any> {
    return this.httpClient.get(this.baseURL + 'client', { 'headers': this.headers });
  }

  getCommercialBoard(): Observable<any> {

    return this.httpClient.get(this.baseURL + 'commercial', { 'headers': this.headers });
  }

  getAdminBoard(): Observable<any> {
    return this.httpClient.get(this.baseURL + 'admin', { 'headers': this.headers });
  }
 
  getCompte(id:number){
    return this.httpClient.get(this.baseURL + '/clients/'+ id , { 'headers': this.headers })
 
  }

  uploadFile(id:number, data : File , cat : any ){
    const formData= new FormData()

    formData.append('file', data)
    formData.append('category', cat)

    return this.httpClient.post(this.baseURL + '/dossiers/'+ id + '/upload' ,   formData ,  {  reportProgress: true})

  }

  editCompte(id:number , data : any){
   let idc = JSON.parse(localStorage.getItem('idUser') || '')

    return this.httpClient.put(this.baseURL+'/dossiers/'+ id +'/'+ idc, data ,  { 'headers': this.headers })
  }
}
