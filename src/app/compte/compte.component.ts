import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
user = { name: "" , adresse :"" , ville:""  , code :"" , portable :"" , fixe :"" , email :"" , civilite :"" , profession :  ""} 
  constructor() { }

  ngOnInit(): void {
  }

}
