import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationComponent } from './authentication.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'home',
    component: AuthenticationComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path:'',
        redirectTo: 'login',
        pathMatch: 'full' 
      },
      {
        path: 'login',
        component: LogInComponent
      },
      {
        path: 'signup',
        component: SignUpComponent
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})

export class AuthenticationRoutingModule {}
