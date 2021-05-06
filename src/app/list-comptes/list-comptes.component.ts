import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListComptesService } from './list-comptes.service';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
 
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
  'role': ""
 }];
 displayedColumns: string[] = ['Email', 'Nom', 'Prénom', 'Action'];
 dataSource = new MatTableDataSource(this.users);


  constructor(private router: Router , private service: ListComptesService) { }

  ngOnInit(): void {
    this.service.getListOfUsers().subscribe(data =>{
      console.log('useers ====> ' , data);
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
    this.service.export().subscribe(data =>{
      console.log("export data ==> ", data);
      
      
    })
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
