import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { RegisterService } from './register.service';


@NgModule({
  declarations: [],
  imports: [
    ButtonsModule,
    FormsModule,
    CommonModule
  ],
  providers: [RegisterService]
})
export class RegisterModule { }
