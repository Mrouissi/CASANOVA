import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { TokenStorageService } from '../_security/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;

 constructor(private service: LoginService, private router: Router) {}

  ngOnInit(): void {
  }

  doLogin() {
    let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      console.log('login data ===> ' , data);
      let datas = JSON.stringify(data)
      let res = JSON.parse(datas)
      console.log ('resultat', res)
      localStorage.setItem('user', datas);
      localStorage.setItem('name', res.nom + res.prenom);
      let role = res.roles[0].name
      if(role == "ROLE_ADMIN"){
        this.router.navigate(["/admin"])
        localStorage.setItem('role', 'admin');
      }else if (role == "ROLE_CLIENT"){
      this.router.navigate(["/client"])
      localStorage.setItem('role', 'user');
      localStorage.setItem('idUser', res.id );
      }else if (role == "ROLE_COMMERCIAL"){
      this.router.navigate(["/commercial"])
      localStorage.setItem('role', 'commercial');
      localStorage.setItem('idUser', res.id );
      }
    });
  }


 /* form: any = {
    email: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles = '';

  constructor(private authService: LoginService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { email, password } = this.form;
    console.log('email', email)
    console.log('pass', password)
    this.authService.login(email, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        console.warn(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        //this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
    
  }
  reloadPage(): void {
    window.location.reload();
  }*/
}
