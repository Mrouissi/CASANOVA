import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-comptes',
  templateUrl: './list-comptes.component.html',
  styleUrls: ['./list-comptes.component.css']
})
export class ListComptesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Getdetails(e:any){
console.log(e);
this.router.navigate(['user']);  


  }
}
