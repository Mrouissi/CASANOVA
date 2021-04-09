import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandesComponent } from './commandes/commandes.component';
import { CompteComponent } from './compte/compte.component';
import { ContactComponent } from './contact/contact.component';
import { DisponibilityComponent } from './disponibility/disponibility.component';
import { ListComptesComponent } from './list-comptes/list-comptes.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'compte', component: CompteComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'cmd', component: CommandesComponent
  },
  {
    path: 'dispo', component: DisponibilityComponent
  },
  {
    path: 'user', component: UserComponent
  },
  {
    path: 'list', component: ListComptesComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  { path: '', redirectTo: 'login', pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
