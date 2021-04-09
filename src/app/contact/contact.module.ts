import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RatingModule } from 'ngx-bootstrap/rating';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './contact.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    TooltipModule.forRoot(),
    RatingModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
  ]
})
export class ContactModule {}
