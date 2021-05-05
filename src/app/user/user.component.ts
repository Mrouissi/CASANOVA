import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from './user.service';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  isLinear = false;
  public firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup
compte = {
  'selected' : true
}
  fileToUpload: any ;
id = '';
role = '';
cmd = '';
acompte ='';
montant = 0;
dateAcompte = '';
files =[] as any
  name: any;
  idD: any;
  categorie: any = "Devis/Commande";
  file : any ;
  @ViewChild('File') File: ElementRef | undefined;
  constructor(private _formBuilder: FormBuilder, private service: UserService) {

  }

  ngOnInit() {
    this.name = localStorage.getItem('name')
    let userData = JSON.parse(localStorage.getItem('user') || '')
    this.role = userData.role;
    this.id = JSON.parse(localStorage.getItem('idUser') || '')
    this.service.getCompte(parseInt(this.id)).subscribe(data=>{
      console.log("userrr ==>" , data);
      let datas = JSON.stringify(data)
      let res = JSON.parse(datas)
      this.cmd = res.dossiers[0].etat_dossier;
      this.acompte = res.dossiers[0].etat_acompte;
      this.montant = res.dossiers[0].montant_acompte;
      this.dateAcompte = res.dossiers[0].date_commande;
      this.idD =  res.dossiers[0].id;
      for(let i=0 ; i < res.dossiers[0].files.length ; i++){
        let obj = {id:0, name:"", category:"", type:"", data:""}
        obj.id =res.dossiers[0].files[i].id;
        obj.name =res.dossiers[0].files[i].nom;
        obj.category =res.dossiers[0].files[i].categorie;
        obj.type = res.dossiers[0].files[i].type;
        obj.data = res.dossiers[0].files[i].data;
        this.files.push(obj)
        console.log(this.files)

      }
      console.log("cmd ====>", this.cmd);
    });

    this.firstFormGroup = this._formBuilder.group({
      stateCMD: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  
  }
  cmdChange(e:any){
    console.log(e);
    
  }

  handleFileInput(event: any) 
  {
    console.log(event);
    this.fileToUpload = event.target;
  }
selectChange(event:any){
  if (event.srcElement.options.selectedIndex == 0){
     this.categorie="Devis%2FCommande"

  }else if (event.srcElement.options.selectedIndex == 1){
     this.categorie="Facture"

  }else if (event.srcElement.options.selectedIndex == 2){
     this.categorie="Divers"

  }else if (event.srcElement.options.selectedIndex == 3){
     this.categorie="Photos"

  }
 
console.log(event);

}
upload(){
  if(this.fileToUpload.files.length > 0) {
  
    this.service.uploadFile(this.idD ,  this.fileToUpload.files[0] , this.categorie ).subscribe(data => {

    })
  }
}
radioChange(e:any){
console.log("event", e);

}
radioChangeAcompte(e:any){

}
radioChangeSAV(e:any){

}
radioChangeChantier(e:any){

}

  downloadFile(file:any){
    console.log(file);
    const linkSource = 'data:'+file.type+";base64,"+file.data
    const downloadLink = document.createElement("a");
    const fileName = file.name;

    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }
}

