import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UserService } from './user.service';
import { saveAs } from 'file-saver';
import * as FileSaver from 'file-saver';



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
  fileToUpload!: File ;
id = '';
role = '';
cmd = '';
acompte ='';
montant = 0;
dateAcompte = '';
files =[{
  id: 0,
  name :"",
  type:""
}]
  name: any;
  idD: any;
  categorie: any;
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
      for(let i=0 ; i< res.dossiers[0].files.length ; i++){
        if(res.dossiers[0].files.length > 0){
          this.files =[]     
             let obj = {id:0, name:"", type:""}
           obj.id =res.dossiers[0].files[i].id;
        obj.name =res.dossiers[0].files[i].nom;
        obj.type = res.dossiers[0].files[i].categorie;
        this.files.push(obj)
        }

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

    let elem = event.target;
    if(elem.files.length > 0) {
      let formData= new FormData()
      console.log('dataaa 1',elem.files[0]);
      console.log('dataa 2 ', elem.files[0].name);
      formData.append('file', elem.files[0], elem.files[0].name)
      this.file = formData
      console.log('dataaa',JSON.stringify(formData));
      let data = {
        categorie : this.categorie,
        file  : formData.get('file')
      }
      this.service.uploadFile(this.idD ,  elem.files[0] , this.categorie ).subscribe(data => {
  
      })
    }
 //this.file = event.target.files[0]
  //this.fileToUpload == null ? this.fileToUpload : files.item(0);
}
selectChange(event:any){
  if (event.srcElement.options.selectedIndex == 0){
     this.categorie="Devis/Commande"

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
  console.log("thiiiis ===> ", this.file);
  let data = {
    categorie : this.categorie,
    file : this.file
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

downloadFile(e:any){
  console.log("file", e);
  this.service.downloadFile(this.idD,e).subscribe(data => {
    console.log('donwload ===>', data);
    const file = new Blob([data], {type: 'text/plain'});
   FileSaver.saveAs(file, "test.txt");
  })

}
}

