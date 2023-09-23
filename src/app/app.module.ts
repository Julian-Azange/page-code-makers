import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroAreaComponent } from './components/hero-area/hero-area.component';
import { ServicesAreaComponent } from './components/services-area/services-area.component';
import { TeamAreaComponent } from './components/team-area/team-area.component';
import { CardServiceComponent } from './components/card-service/card-service.component';
import { CardTeamComponent } from './components/card-team/card-team.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HeroAreaComponent,
    ServicesAreaComponent,
    TeamAreaComponent,
    CardServiceComponent,
    CardTeamComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    HomeLayoutComponent,
    TeamPageComponent,
    ServicesPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
