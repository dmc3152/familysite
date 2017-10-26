import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

import { AuthenticationComponent } from './authentication.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    AuthenticationRoutingModule,
    SharedModule,
  ],
  declarations: [AuthenticationComponent, LogInComponent, SignUpComponent]
})
export class AuthenticationModule { }
