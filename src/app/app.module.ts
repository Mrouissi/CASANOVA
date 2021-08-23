import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { DisponibilityModule } from './disponibility/disponibility.module';
import { CompteModule } from './compte/compte.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommandeModule } from './commandes/commande.module';
import { ContactModule } from './contact/contact.module';
import { RegisterComponent } from './register/register.component';
import { ListComComponent } from './list-com/list-com.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { ListComptesComponent } from './list-comptes/list-comptes.component';
import { FilterSearchPipe } from './filter-search.pipe';
import { RegisterAdminComponent } from './register-admin/register-admin.component';
import { ClientCommandeComponent } from './client-commande/client-commande.component';
import { RegisterClientComponent } from './register-client/register-client.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListComComponent,
    ListAdminComponent,
    ListComptesComponent,
    FilterSearchPipe,
    RegisterAdminComponent,
    ClientCommandeComponent,
    RegisterClientComponent
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
    CommandeModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
