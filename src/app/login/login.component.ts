import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

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
      localStorage.clear();
      localStorage.setItem('user', datas);
      localStorage.setItem('name', res.nom + res.prenom);
      if(res.role == "ROLE_ADMIN"){
        this.router.navigate(["/list"])
        localStorage.setItem('role', 'admin');
      }else if (res.role == "ROLE_CLIENT"){
      this.router.navigate(["/user"])
      localStorage.setItem('role', 'user');
      localStorage.setItem('idUser', res.id );

      }
    });
  }
}
