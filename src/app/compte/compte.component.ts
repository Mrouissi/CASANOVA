import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { CompteService } from './compte.service';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
user =
 {nom: "" , 
 prenom: "",
 adresse :"" , 
 ville:""  , 
 code_postal :"" , 
 tel_portable :"" , 
 tel_fixe :"" , 
 email :"" , 
 civilite :"" , 
 profession :  ""
} 
  id: any;
  name: any;
  constructor(private service: UserService , private router: Router, private serviceCompte: CompteService) { }

  ngOnInit(): void {
    this.name =localStorage.getItem('name')

    this.id = JSON.parse(localStorage.getItem('idUser') || '')
    
    this.service.getCompte(parseInt(this.id)).subscribe(data=>{
      console.log("userrr ==>" , data);
      let datas = JSON.stringify(data)
      let res = JSON.parse(datas)
    this.user.adresse = res.adresse;
    this.user.civilite = res.civilite;
    this.user.nom = res.nom;
    this.user.prenom = res.prenom;
    this.user.email = res.email;
    this.user.code_postal = res.code_postal;
    this.user.tel_portable = res.tel_portable;
    this.user.tel_fixe = res.tel_fixe;
    this.user.profession = res.profession;
    this.user.ville = res.ville ;
    });
  }
  goToAcceuil(){
    this.router.navigate(["/user"])
  }
  saveUser(e:any){
    console.log("updaaate user", e);
    
    this.serviceCompte.updateUser(JSON.stringify(this.user)).subscribe(data =>{

    })
  }
}
