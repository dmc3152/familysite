import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   canActivate: [AuthGuard, PageGuard],
  //   resolve: {
  //     permissions: PageGuard
  //   }
  // },
  // {
  //   path: 'worklist',
  //   component: WorklistComponent,
  //   canActivate: [AuthGuard, PageGuard],
  //   resolve: {
  //     permissions: PageGuard
  //   }
  // },
  // {
  //   path: 'schedule',
  //   component: ScheduleComponent,
  //   canActivate: [AuthGuard, PageGuard],
  //   resolve: {
  //     permissions: PageGuard
  //   }
  // },
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   canActivate: [AuthGuard, PageGuard],
  //   resolve: {
  //     permissions: PageGuard
  //   }
  // },
  // {
  //   path: 'unauthorized',
  //   component: UnauthorizedComponent
  // },
  // {
  //   path: 'page-not-found',
  //   component: PageNotFoundComponent
  // }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: [
    AuthGuard,
  ]
})

export class CoreRoutingModule {}
