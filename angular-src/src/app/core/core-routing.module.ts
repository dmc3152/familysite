import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent,
  //   // canActivate: [AuthGuard],
  // },
  {
    path: 'feed',
    component: FeedComponent,
  },
  {
    path: 'howitworks',
    component: HowitworksComponent,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
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
