import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ListeClientsByComService } from './liste-clients-by-com.service';

@Component({
  selector: 'app-liste-clients-by-com',
  templateUrl: './liste-clients-by-com.component.html',
  styleUrls: ['./liste-clients-by-com.component.css']
})
export class ListeClientsByComComponent implements OnInit {

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

   user = [{
    "id": 0,
   }];
  
  userData = {
    roles:[],
    "id":'',
  }

 dataSource = new MatTableDataSource(this.clients);

 searchClient="";
 commercial_id="";

  constructor(private router: Router , private service: ListeClientsByComService) { }

  ngOnInit(): void {

    this.userData = JSON.parse(localStorage.getItem('user') || '');
    this.commercial_id = this.userData.id;
    
    this.service.getListOfClients(this.commercial_id).subscribe(data => {
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


  Getdetails(e:any){
    console.log('id ====>',e);
    localStorage.setItem('idUser', e);
    this.router.navigate(['user']);  
}

}
