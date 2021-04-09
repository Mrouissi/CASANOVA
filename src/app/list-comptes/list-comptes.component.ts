import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListComptesService } from './list-comptes.service';


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
  constructor(private router: Router , private service: ListComptesService) { }

  ngOnInit(): void {
    this.service.getListOfUsers().subscribe(data =>{
      console.log('useers ====> ' , data);
      let datas = JSON.stringify(data)
      let res = JSON.parse(datas)
      
      this.users = res
      
    })
  }

  Getdetails(e:any){
console.log('id ====>',e);

localStorage.setItem('idUser', e);
this.router.navigate(['user']);  


  }
}
