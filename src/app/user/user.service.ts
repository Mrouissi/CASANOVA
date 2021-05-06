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

  uploadFile(id:number, data : File , cat : any ){
    const formData= new FormData()

    formData.append('file', data)
    formData.append('category', cat)

    return this.httpClient.post(this.baseURL + '/dossiers/'+ id + '/upload' ,   formData ,  {  reportProgress: true})

  }
  editCompte(id:number , data : any){
   let idc = JSON.parse(localStorage.getItem('idUser') || '')

    return this.httpClient.put( '/api/api/dossiers/'+ id +'/'+ idc, data ,  { 'headers': this.headers })
 
  }
}
