import { Component } from '@angular/core';

import * as $ from 'jquery'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  

  constructor() {
    // Asegúrate de que el elemento .navigation exista en tu HTML
    const navigationElement = $('.navigation');

    // Agrega una clase 'nav-bg' cuando se desplaza la ventana
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
