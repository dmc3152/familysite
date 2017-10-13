import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

import { AuthService } from './auth.service';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  imports: [
    CoreRoutingModule,
    SharedModule,
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AboutusComponent,
    HowitworksComponent,
    HomeComponent,
    FooterComponent,
    FeedComponent
  ],
  providers: [
    AuthService
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
