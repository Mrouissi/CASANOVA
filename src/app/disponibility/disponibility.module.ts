import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DisponibilityComponent } from './disponibility.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {MatNativeDateModule } from '@angular/material/core';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [DisponibilityComponent],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule
  ],
  providers: [  
    MatDatepickerModule,  
  ],
})
export class DisponibilityModule { }
