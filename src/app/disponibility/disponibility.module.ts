import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DisponibilityComponent } from './disponibility.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [DisponibilityComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BsDropdownModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,

  ],
  providers: [  
    MatDatepickerModule,  
  ],
})
export class DisponibilityModule { }
