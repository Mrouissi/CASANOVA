import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatStepperModule} from '@angular/material/stepper';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatInputModule } from '@angular/material/input';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {MatRadioModule} from '@angular/material/radio';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [UserComponent , HeaderComponent],
  imports: [
    MatStepperModule,
    MatInputModule,
    BsDropdownModule.forRoot(),
    CdkStepperModule,
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    MatRadioModule,
    TooltipModule.forRoot() ,
    MatIconModule,
   ]
})
export class UserModule { }
