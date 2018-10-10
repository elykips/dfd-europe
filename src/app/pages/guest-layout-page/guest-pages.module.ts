import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GuestPagesRoutingModule } from "./guest-pages-routing.module";
import { AboutUsComponent } from './about-us/about-us.component';
import { GuestLayoutPageComponent } from './guest-layout-page.component';
import { SigninComponent } from '../../auth/signin/signin.component';
import { SignupComponent } from '../../auth/signup/signup.component';
  

@NgModule({
    imports: [
    CommonModule,
        GuestPagesRoutingModule,
        FormsModule,
        ReactiveFormsModule,     
    ],
    declarations: [
        GuestLayoutPageComponent,
        AboutUsComponent,
        SigninComponent,
        SignupComponent
    ]
})
export class GuestPagesModule { }
