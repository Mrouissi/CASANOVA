import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ListAdminService } from './list-admin.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

  admins = [{
    'email': "",
    'id': 0,
    'nom': "",
    'password': "",
    'prenom': "",
    'role': "",
    'tel_portable': "",
    'civilite': ""
   }];

  dataSource = new MatTableDataSource(this.admins);

  constructor(private router: Router , private service: ListAdminService) { }

  ngOnInit(): void {

    this.service.getListOfAdmin().subscribe(data => {
      console.log('admins ===> ' , data);
      let datas = JSON.stringify(data)
      let res = JSON.parse(datas)
      
      this.admins = res
      const row = this.dataSource.data;
     row.splice(0,1)
      for(let i=0 ; i < res.length ; i++){
        
        row.push(res[i]);
        this.dataSource.data = row;
      }
     
    })
  }
}
