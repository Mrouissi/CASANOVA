import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CompteComponent } from './compte.component';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [CompteComponent],
  imports: [
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ButtonsModule.forRoot(),
    BrowserModule
   ]
})
export class CompteModule { }
