import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CompteComponent } from './compte.component';



@NgModule({
  declarations: [CompteComponent],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
   ]
})
export class CompteModule { }
