import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-commande',
  templateUrl: './client-commande.component.html',
  styleUrls: ['./client-commande.component.css']
})
export class ClientCommandeComponent implements OnInit {
  select: any;

  reglementMode = [
    {value : 'Comptant', name : 'Comptant'},
    {value : 'Financement', name : 'Financement'}] ;

  constructor() { }

  ngOnInit(): void {
  }
  onItemChange(selectedValue: string){
    return this.select = selectedValue;
    console.log('selected value= ' + this.select);
  }

}
