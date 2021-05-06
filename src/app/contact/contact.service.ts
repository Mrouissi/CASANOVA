import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  headers = new HttpHeaders({
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
   })
  

  baseURL = "http://localhost:8080/api"
  constructor(private httpClient: HttpClient) { }

  public addComment(cmt : string) {
    let id = JSON.parse(localStorage.getItem('idUser') || '')
    const formData= new FormData()
    formData.append('client', id)
    formData.append('message', cmt)
    return this.httpClient.post(
      this.baseURL+"/contact",
      formData
    )
    }
}
