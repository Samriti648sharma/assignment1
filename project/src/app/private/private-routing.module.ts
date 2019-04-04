import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';


const appRoutes : Routes=[
  {path: 'nav', component: NavbarComponent ,children:[
    {path: 'profile', component: ProfileComponent},
  {path: 'booking', component: MyBookingsComponent},
  {path: 'faq', component: FaqComponent }]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class PrivateRoutingModule { }
