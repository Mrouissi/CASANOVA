
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commercial } from './commercial';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  // Components variables
  isCommercial!: boolean;

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
  clicked= false;
  errorMessage = '';
  roles: string[] = [];


  constructor(private service: RegisterService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log(this.route.queryParams);
    this.route.queryParams
      .subscribe(params => {
        this.isCommercial = params.role == 1 ? true : false;
      });
  }

  onSubmit(): void { 

    if (this.clicked) {

      const commercial = new Commercial(this.form.agence,
        this.form.nom,
        this.form.prenom,
        this.form.tel_portable,
        this.form.role,
        this.form.password,
        this.form.email);

      this.service.registerCommercial(commercial).subscribe(
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

    } else {

      this.service.createClientPassword(this.form.password, this.form.email).subscribe(
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

  registerCommercial(): void {
    this.clicked=true;
  }

  updateClient(): void{
    
    this.clicked=false;
  }
}










