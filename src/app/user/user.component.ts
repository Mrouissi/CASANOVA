import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
id = "";
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
  dossier: any;
  msg = '';
  sav: any;
  chantier: any;
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
      this.sav =res.dossiers[0].etat_sav;
      this.idD =  res.dossiers[0].id;
      this.dossier = res.dossiers[0];
      this.chantier = res.dossiers[0].chantier.etat_chantier
      this.msg = res.dossiers[0].msg_sav;
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
      thirdCtrl: ['', Validators.required],
    'msg': new FormControl(''),
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
  
  }
  cmdChange(e:any){
    console.log(e); 
  }
change(e:any){
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
  console.log('begin upload')
  if(this.fileToUpload.files.length > 0) {
    console.log('file found')
    this.service.uploadFile(parseInt(this.id) ,  this.fileToUpload.files[0] , this.categorie ).subscribe(data => {

    })
  }
}
radioChange(e:any){
  this.dossier.etat_dossier = e.value;
}
saveDossier(){
  this.service.editCompte(this.dossier.id , this.dossier).subscribe(data => {
      })
}
radioChangeAcompte(e:any){
   this.dossier.etat_acompte =e.value;
}
radioChangeSAV(e:any){

  this.dossier.etat_sav = e.value;
  console.log("dossier ==> ", this.thirdFormGroup.controls.msg.value);
  this.thirdFormGroup.controls['msg'].valueChanges.subscribe(
    (selectedValue) => {
      console.log(selectedValue);
      this.dossier.msg_sav = selectedValue;
    }
);

}
radioChangeChantier(e:any){
this.dossier.chantier.etat_chantier = e.value
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

