import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { DisponibilityModule } from './disponibility/disponibility.module';
import { CompteModule } from './compte/compte.module';
import { ListComptesComponent } from './list-comptes/list-comptes.component';
import { ListComptesModule } from './list-comptes/list-comptes.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistryComponent } from './registry/registry.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListComptesComponent,
    RegistryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule,
    DisponibilityModule,
    CompteModule,
    FormsModule,
    HttpClientModule,
    ListComptesModule
 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
