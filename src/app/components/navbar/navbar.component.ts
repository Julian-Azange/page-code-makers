import { Component, Renderer2 } from '@angular/core';

import * as $ from 'jquery'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {



  constructor() {
    const navigationElement = $('.navigation');

    $(window).scroll(() => {
      if (navigationElement.offset()!.top > 100) {
        navigationElement.addClass('nav-bg');
      } else {
        navigationElement.removeClass('nav-bg');
      }
    });
  }

  isNavbarOpen = false;

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

}
