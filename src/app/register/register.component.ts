
import { Component, NgModule, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commercial } from './commercial';
import { Roles } from './roles';
import { RegisterService } from './register.service';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {

  // Form fields
  email!: string;
  password!: string;
  telephone!: string;
  rule!: string;
  prenom!:string;
  nom!:string;
  cpassword!:string;
  id!:number;
  agence!:string;
  
  commercial: Roles[] = [];
  client : Roles[] = [];

  
  // Components variables
  isCommercial!: boolean;



  constructor(private service: RegisterService, private router: Router, private route: ActivatedRoute) {

       this.commercial.push(new Roles('ROLE_COMMERCIAL'))
       this.client.push(new Roles('ROLE_CLIENT'))
  }

  ngOnInit(): void {

    console.log(this.route.queryParams);
    this.route.queryParams
      .subscribe(params => {
        this.isCommercial = params.role == 1 ? true : false;

        // access control
        // todo
        if(this.isCommercial) {
          // Check user is admin and logged in
          //todo 
        }


      }
    );

  }
  
  doRegister(){
    // Depending on user type
    if(this.isCommercial) {
     this.registerCommercial();
    } else {
      // Register client
      // todo
      this.registerClient();
    }

 

  }

  registerClient() {
    
  }

  registerCommercial() {
    var isValid = true;

    // Field validation

    // Send requesto to backend
    if(isValid) {
      console.log(this.email);

      // Create object of class Commercial
      var newCommercial = new Commercial(this.email, this.password, this.id);
      console.warn(newCommercial);

      // Send request to API
      var response = this.service.registerCommercial(newCommercial);
      response.subscribe(data => {
        console.log('login data ===> ' , data);

        // Handle response
         
      });

    }else
    
    {
      // Display errors
      // todo
    }
  }
}

