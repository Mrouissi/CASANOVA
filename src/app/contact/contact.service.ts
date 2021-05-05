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
  

   
  constructor(private httpClient: HttpClient) { }

  public addComment(cmt : string) {
    let id = JSON.parse(localStorage.getItem('idUser') || '')

    return this.httpClient.put(
      "/api/contact",
      {id  , cmt },
      { headers: this.headers })
  }}
