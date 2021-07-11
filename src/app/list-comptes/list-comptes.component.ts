import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListComptesService } from './list-comptes.service';
import {MatTableDataSource} from '@angular/material/table';

 
@Component({
  selector: 'app-list-comptes',
  templateUrl: './list-comptes.component.html',
  styleUrls: ['./list-comptes.component.css']
})

export class ListComptesComponent implements OnInit {
  
  clients = [{
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
    "dossiers": [],
    "periodes_abs": []
   }];
   
 dataSource = new MatTableDataSource(this.clients);

 searchClient="";

  constructor(private router: Router , private service: ListComptesService) {}

  ngOnInit(): void {
    
    this.service.getListOfClients().subscribe(data => {
      console.log('clients ===> ' , data);
      let datas = JSON.stringify(data)
      let res = JSON.parse(datas)
      
      this.clients = res
      const row = this.dataSource.data;
      row.splice(0,1)
      for(let i=0 ; i < res.length ; i++){ 
        row.push(res[i]);
        this.dataSource.data = row;
      } 
    })
  }

  export(){
    this.service.export().subscribe(data =>{})
    window.open("http://localhost:8080/api/client/export/excel");

  }
  Getdetails(e:any){
      console.log('id ====>',e);
      localStorage.setItem('idUser', e);
      this.router.navigate(['user']);  
  }
}
