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
    this.router.navigate(["/regist"])
    /*let resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      this.router.navigate(["/compte"])
    });*/
  }
}
