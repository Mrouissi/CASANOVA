import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ClientCommandeService } from './client-commande.service';

@Component({
  selector: 'app-client-commande',
  templateUrl: './client-commande.component.html',
  styleUrls: ['./client-commande.component.css']
})
export class ClientCommandeComponent implements OnInit {
  select: any;
  vente: any;

  agences =  [{'id': 0, 'nom': "" }];
  dataSource = new MatTableDataSource(this.agences);

  entiteVente=  [{'id': 0, 'nom': "" }];
  entiteVenteSource = new MatTableDataSource(this.entiteVente);

  contactOrigines=[{'id': 0, 'nom': "" }];
  contactOriginesSource=new MatTableDataSource(this.contactOrigines);

  typeTravaux=[{'id': 0, 'nom': "","elementARenoverList":[]}];
  typeTravauxSource=new MatTableDataSource(this.typeTravaux);
  
  elements = [{'id': 0, 'nom': "","prestationARealiserList":[]}]
  elementsSource = new MatTableDataSource(this.elements);

  prestations = [{'id': 0, 'nom': "","supportExistantList":[]}]
  prestationsSource = new MatTableDataSource(this.prestations);

  supports= [{'id': 0, 'nom': "" }];
  supportSource = new MatTableDataSource(this.supports);

  commercials = [{'id': 0,'email': "",'nom': "",'password': "",'prenom': "",'role': "",'tel_portable': "",'ville': "",'agence': ""}];
  commercialsSource = new MatTableDataSource(this.commercials);

  reglementMode = [
    {value : 'Comptant', name : 'Comptant'},
    {value : 'Financement', name : 'Financement'}] ;
  

  constructor(private router: Router, private service : ClientCommandeService) { }

  ngOnInit(): void {

    this.service.getAllAgence().subscribe(data => {

      let datas = JSON.stringify(data)
      let res = JSON.parse(datas)
      this.agences = res
      const row = this.dataSource.data;
      row.splice(0,1)
      for(let i=0 ; i < res.length ; i++){
        row.push(res[i]);
        this.dataSource.data = row;
      }
    })

    this.service.getAllEntiteVente().subscribe(data => {
      
      let datas = JSON.stringify(data)
      let res = JSON.parse(datas)
      this.entiteVente = res

      const row1 = this.entiteVenteSource.data;
      row1.splice(0,1)
      for(let i=0 ; i < res.length ; i++){
        row1.push(res[i]);
        this.entiteVenteSource.data = row1;
      }
    });



    this.service.getAllOrigineContact().subscribe(data => {
     
      let datas = JSON.stringify(data)
      let res = JSON.parse(datas)
      this.contactOrigines = res
      const row = this.contactOriginesSource.data;
      row.splice(0,1)
      for(let i=0 ; i < res.length ; i++){
        row.push(res[i]);
        this.contactOriginesSource.data = row;
      }
    })

    this.service.getAllTypesTravaux().subscribe(data => {
     
      let datas = JSON.stringify(data)
      let res = JSON.parse(datas)
      this.typeTravaux = res
      const row = this.typeTravauxSource.data;
      row.splice(0,1)
      for(let i=0 ; i < res.length ; i++){
        row.push(res[i]);
        this.typeTravauxSource.data = row;
      }
    })

    this.service.getAllElementARenover().subscribe(data => {
      
      let datas = JSON.stringify(data)
      let res = JSON.parse(datas)
      this.elements = res
      const row = this.elementsSource.data;
      row.splice(0,1)
      for(let i=0 ; i < res.length ; i++){
        row.push(res[i]);
        this.elementsSource.data = row;
      }
    })

    this.service.getAllPrestations().subscribe(data => {
    
      let datas = JSON.stringify(data)
      let res = JSON.parse(datas)
      this.prestations = res
      const row = this.prestationsSource.data;
      row.splice(0,1)
      for(let i=0 ; i < res.length ; i++){
        row.push(res[i]);
        this.prestationsSource.data = row;
      }
    })
    this.service.getAllSupports().subscribe(data => {
     
      let datas = JSON.stringify(data)
      let res = JSON.parse(datas)
      this.supports = res
      const row = this.supportSource.data;
      row.splice(0,1)
      for(let i=0 ; i < res.length ; i++){
        row.push(res[i]);
        this.supportSource.data = row;
      }
    })

    this.service.getListOfCom().subscribe(data => {
      console.log('commercials ===> ' , data);
      let datas = JSON.stringify(data)
      let res = JSON.parse(datas)
      
      this.commercials = res
      const row = this.commercialsSource.data;
     row.splice(0,1)
      for(let i=0 ; i < res.length ; i++){
        
        row.push(res[i]);
        this.commercialsSource.data = row;
      }
     
    })

  }

  onItemChange(selectedValue: any){
  return this.select = selectedValue.target.value;
  }

 loadcomptravaux(selected : any){
  return this.vente = selected.target.value,
  console.log('toto', this.vente)
  ;
 }

}
