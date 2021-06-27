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
  users = [{
    'email': "",
    'id': 0,
    'nom': "",
    'password': "",
    'prenom': "",
    'role': "",
    'tel_portable': "",
    'ville': "",
    'civilite': ""
   }];
 displayedColumns: string[] = ['Email', 'Nom', 'Prénom', 'Action'];
 dataSource = new MatTableDataSource(this.users);


  constructor(private router: Router , private service: ListComptesService) { }

  ngOnInit(): void {
    this.service.getListOfUsers().subscribe(data => {
      console.log('useers ===> ' , data);
      let datas = JSON.stringify(data)
      let res = JSON.parse(datas)
      
      this.users = res
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  Getdetails(e:any){
console.log('id ====>',e);

localStorage.setItem('idUser', e);
this.router.navigate(['user']);  


  }
}
