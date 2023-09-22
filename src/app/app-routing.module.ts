import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';

const routes: Routes = [
  {
    path : 'about',
    component: AboutPageComponent
  },
  {
    path : 'contact',
    component: ContactPageComponent
  },
  {
    path : 'home',
    component : HomePageComponent
  },
  {
    path : 'team',
    component : TeamPageComponent
  },
  {
    path : 'services',
    component : ServicesPageComponent
  },
  {
    path : '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
