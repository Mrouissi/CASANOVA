import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ListComService } from './list-com.service';

@Component({
  selector: 'app-list-com',
  templateUrl: './list-com.component.html',
  styleUrls: ['./list-com.component.css']
})
export class ListComComponent implements OnInit {
  commercials = [{
    'id': 0,
    'email': "",
    'nom': "",
    'password': "",
    'prenom': "",
    'role': "",
    'tel_portable': "",
    'ville': "",
    'agence': ""
   }];

  dataSource = new MatTableDataSource(this.commercials);
  searchCom=''

  constructor(private router: Router , private service: ListComService) { }

  ngOnInit(): void {

    this.service.getListOfCom().subscribe(data => {
      console.log('commercials ===> ' , data);
      let datas = JSON.stringify(data)
      let res = JSON.parse(datas)
      
      this.commercials = res
      const row = this.dataSource.data;
     row.splice(0,1)
      for(let i=0 ; i < res.length ; i++){
        
        row.push(res[i]);
        this.dataSource.data = row;
      }
     
    })
  }

  deleteCom(id: number){

    if (confirm("Voulez-vous supprimer le commercial " + id + "?")){
      this.service.delete(id).subscribe((res) => {
        console.log(res);
        this.commercials = this.commercials.filter(x => x.id !== id);
      });
    }
  }

}