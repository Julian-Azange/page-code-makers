import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroAreaComponent } from './hero-area/hero-area.component';
import { ServicesAreaComponent } from './services-area/services-area.component';
import { TeamAreaComponent } from './team-area/team-area.component';
import { CardServiceComponent } from './card-service/card-service.component';
import { CardTeamComponent } from './card-team/card-team.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    HeroAreaComponent,
    ServicesAreaComponent,
    TeamAreaComponent,
    CardServiceComponent,
    CardTeamComponent
  ],
  imports: [
    CommonModule,
    NgModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }
