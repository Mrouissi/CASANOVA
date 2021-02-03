import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { DisponibilityComponent } from './disponibility/disponibility.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
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
    path: 'login', component: LoginComponent
  },
  { path: '', redirectTo: 'login', pathMatch: 'full'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
