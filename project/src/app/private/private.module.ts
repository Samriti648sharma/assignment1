import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { FaqComponent } from './faq/faq.component';
import { PrivateRoutingModule } from './private-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from "@angular/forms";
import { UpdateService } from './profile/update.service';
import { BookingsService } from './my-bookings/bookings.service';
import { FaqService } from './faq/faq.service';


@NgModule({
  declarations: [NavbarComponent, MyBookingsComponent, FaqComponent, ProfileComponent],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    ReactiveFormsModule
  ],
  providers:[ UpdateService,
    BookingsService,
    FaqService ]
})
export class PrivateModule { }
