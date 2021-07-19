import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

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
  roles = {'name': ''};
  role = '';
  userData = {
    roles:[],
    "nom": '',
    "prenom":'',
  }

  ngOnInit(){

    this.userData = JSON.parse(localStorage.getItem('user') || '');
    this.roles = this.userData.roles[0];
    this.role = this.roles.name;
  }

  title = 'casanova';

  constructor(public router: Router) {

  }
}
