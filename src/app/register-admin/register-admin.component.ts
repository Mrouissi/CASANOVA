import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RegisterAdminService} from './register-admin.service';
import {Admin} from './admin';


@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  form: any = {
    agence: null,
    nom : null,
    prenom: null,
    tel_portable: null,
    password: null,
    email: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private service: RegisterAdminService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {}

  doAdminRegister(): void {
    const admin = new Admin(this.form.nom,
      this.form.prenom,
      this.form.tel_portable,
      this.form.role,
      this.form.password,
      this.form.email);

    this.service.registerAdmin(admin).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
