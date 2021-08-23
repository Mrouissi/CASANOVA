import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from './client';
import { RegisterClientService } from './register-client.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent implements OnInit {
  user = [{
    "id": 0,
    "email": "",
    "password": "",
    "nom": "",
    "prenom": "",
    "role": "",
    "isEnabled": true,
    "civilite": "",
    "ville": "",
    "code_postal": "",
    "dpt": "",
    "adresse": "",
    "tel_fixe": "",
    "tel_portable": "",
   }];

  dataSource = new MatTableDataSource(this.user);
  userData = {
    roles:[],
    "id":'',
    "nom": '',
    "prenom":'',
  }

  form: any = {
    name: null,
    forname: null,
    adresse: null,
    cp: null,
    ville: null,
    portable: null,
    dpt:null,
    civilite:null,
    fixe: null,
    email: null,
    commercial_id:null,
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private service:RegisterClientService, private router: Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('user') || '');
    this.form.commercial_id = this.userData.id;
  }
 
  onSubmit(): void {
    const client = new Client (this.form.name,
      this.form.forname,
      this.form.portable,
      this.form.email,
      this.form.civilite,
      this.form.ville,
      this.form.cp,
      this.form.dpt,
      this.form.fixe,
      this.form.adresse,
      this.form.commercial_id,
      );

    this.service.registerClient(client).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
