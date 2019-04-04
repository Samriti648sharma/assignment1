import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes=[
  {path:"",
  loadChildren:"./public/public.module#PublicModule"},
  {path:"",
  loadChildren:"./private/private.module#PrivateModule"},
 ];
@NgModule({
  declarations: [],
  imports: [

    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
