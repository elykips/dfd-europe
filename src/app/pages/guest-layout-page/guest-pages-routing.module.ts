import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestLayoutPageComponent } from './guest-layout-page.component';
import { SigninComponent } from '../../auth/signin/signin.component';
import { SignupComponent } from '../../auth/signup/signup.component';
import { AboutUsComponent } from './about-us/about-us.component';



const routes: Routes = [
  {
    path: '',
     component: GuestLayoutPageComponent,
    data: {
      title: 'Guest Layout page'
    },    
  },
  {
    path: 'about-us',
     component: AboutUsComponent,
    data: {
      title: 'About Us'
    },    
  },
  {
    path: 'sign-in',
     component: SigninComponent,
    data: {
      title: 'Sign In'
    },    
  },
  {
    path: 'sign-up',
     component: SignupComponent,
    data: {
      title: 'Sign In'
    },    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class GuestPagesRoutingModule { }
