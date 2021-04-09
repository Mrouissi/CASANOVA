import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommandesComponent } from './commandes.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [CommandesComponent],
  imports: [
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
  ]
})
export class CommandeModule { }
