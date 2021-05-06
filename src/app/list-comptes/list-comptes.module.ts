import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComptesComponent } from './list-comptes.component';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ListComptesComponent],
  imports: [
    BrowserModule,
FormsModule,
BrowserAnimationsModule,
    CommonModule,
    MatTableModule,
    CdkTableModule,
    MatFormFieldModule,
    MatInputModule
    
    
  ]
})
export class ListComptesModule { }
