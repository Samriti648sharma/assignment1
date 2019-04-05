import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PublicGuard } from '../Gaurd/public.guard';


const appRoutes : Routes=[
  {path: '', redirectTo: '/register', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent,canActivate:[PublicGuard]},
  {path: 'login', component: LoginComponent,canActivate:[PublicGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class PublicRoutingModule { }
