import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component implements OnInit {

  
  isMobileMenuOpen: boolean = true;
  ngOnInit(): void {
    this.initializeOffscreenMenu();

  }
  toggleMobileMenu = () => {
    const slideNav = $('.rt-slide-nav');
    const body = $('body');
    const isOpen = slideNav.is(':visible');
  
    if (isOpen) {
      slideNav.slideUp();
      body.removeClass('slidemenuon');
    } else {
      slideNav.slideDown();
      body.addClass('slidemenuon');
    }
  }
  
  initializeOffscreenMenu = () => {
    const a = $('.offscreen-navigation .menu');
  
    if (a.length) {
      a.children('li').addClass('menu-item-parent');
      a.find('.menu-item-has-children > a').on('click', function(e: JQuery.Event) {
        e.preventDefault();
        const currentItem = $(this);
        const subMenu = currentItem.next('.sub-menu');
        const parentItem = currentItem.closest('.menu-item-parent');
  
        currentItem.toggleClass('opened');
        subMenu.slideToggle(250);
        parentItem.siblings().find('.sub-menu').slideUp(250);
        parentItem.siblings().find('.menu-item-has-children > a').removeClass('opened');
      });
  
      a.find('.menu-item:not(.menu-item-has-children) > a').on('click', function() {
        $('.rt-slide-nav').slideUp();
        $('body').removeClass('slidemenuon');
      });
    }
  }
  

}
