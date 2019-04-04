import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PublicRoutingModule } from './public-routing.module'; 
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterService } from './register/register.service';
import { HttpClientModule } from '@angular/common/http';
import { PrivateModule } from "../private/private.module";


@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrivateModule
  ],
  providers: [ RegisterService ]
})
export class PublicModule { }
