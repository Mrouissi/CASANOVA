import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonsModule.forRoot(),
    FormsModule
  ],
  providers: [LoginService]
})
export class LoginModule { }
