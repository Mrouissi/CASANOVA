import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandesComponent } from './commandes/commandes.component';
import { CompteComponent } from './compte/compte.component';
import { ContactComponent } from './contact/contact.component';
import { DisponibilityComponent } from './disponibility/disponibility.component';
import { ListComptesComponent } from './list-comptes/list-comptes.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { ListComComponent } from './list-com/list-com.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import {RegisterAdminComponent} from './register-admin/register-admin.component';
import {ClientCommandeComponent} from './client-commande/client-commande.component';
import { RegisterClientComponent } from './register-client/register-client.component';

const routes: Routes = [
  {path: 'admins', component: ListAdminComponent},
  {path: 'commercials', component: ListComComponent},
  {path: 'compte', component: CompteComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'cmd', component: CommandesComponent},
  {path: 'dispo', component: DisponibilityComponent},
  {path: 'client', component: UserComponent},
  {path: 'admin', component: ListComptesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'registeradmin', component: RegisterAdminComponent},
  {path: 'commandeclient', component: ClientCommandeComponent},
  {path:'commercial', component: RegisterClientComponent},

  {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
