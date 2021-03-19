import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { DisponibilityComponent } from './disponibility/disponibility.component';
import { ListComptesComponent } from './list-comptes/list-comptes.component';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'regist', component: RegistryComponent
  },
  {
    path: 'compte', component: CompteComponent
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
