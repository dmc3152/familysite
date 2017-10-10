import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

import { AuthService } from './auth.service';

@NgModule({
  imports: [
    SharedModule,
    CoreRoutingModule,
  ],
  declarations: [],
  providers: [
    AuthService
  ]
})
export class CoreModule { }
