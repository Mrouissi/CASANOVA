import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  };

 constructor(private service: LoginService, private router: Router) {}

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  doLogin() {
    const resp = this.service.login(this.form.email, this.form.password);
    resp.subscribe(data => {
      console.log('login data ===> ' , data);
      const datas = JSON.stringify(data);
      const res = JSON.parse(datas);
      console.log ('resultat', res);
      localStorage.setItem('user', datas);
      localStorage.setItem('name', res.nom + res.prenom);
      const role = res.roles[0].name;
      if (role === 'ROLE_ADMIN'){
        this.router.navigate(['/admin']);
        localStorage.setItem('role', 'ROLE_ADMIN');
      }else if (role === 'ROLE_CLIENT'){
      this.router.navigate(['/client']);
      localStorage.setItem('role', 'ROLE_CLIENT');
      localStorage.setItem('idUser', res.id );
      }else if (role === 'ROLE_COMMERCIAL'){
      this.router.navigate(['/commercial']);
      localStorage.setItem('role', 'ROLE_COMMERCIAL');
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

  constructor(private service: LoginService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    console.log('username', username)
    console.log('pass', password)
    this.service.login(username, password).subscribe(
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
        console.warn(this.isLoggedIn);
        console.warn(this.errorMessage);
      }
    );

  } */

}
