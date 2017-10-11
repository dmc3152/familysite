import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HowitworksComponent } from './howitworks/howitworks.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   canActivate: [AuthGuard, PageGuard],
  //   resolve: {
  //     permissions: PageGuard
  //   }
  // },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'howitworks',
    component: HowitworksComponent,
  },
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
