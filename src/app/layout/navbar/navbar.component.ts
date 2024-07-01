import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  locations: any = null;
  phones: any = null;
  social_media: any = null;
  constructor(private contactService: ContactService) {}

  isMobileMenuOpen: boolean = true;
  ngOnInit(): void {
    this.initializeOffscreenMenu();
    this.refreshData();
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
  };

  initializeOffscreenMenu = () => {
    const a = $('.offscreen-navigation .menu');

    if (a.length) {
      a.children('li').addClass('menu-item-parent');
      a.find('.menu-item-has-children > a').on(
        'click',
        function (e: JQuery.Event) {
          e.preventDefault();
          const currentItem = $(this);
          const subMenu = currentItem.next('.sub-menu');
          const parentItem = currentItem.closest('.menu-item-parent');

          currentItem.toggleClass('opened');
          subMenu.slideToggle(250);
          parentItem.siblings().find('.sub-menu').slideUp(250);
          parentItem
            .siblings()
            .find('.menu-item-has-children > a')
            .removeClass('opened');
        }
      );

      a.find('.menu-item:not(.menu-item-has-children) > a').on(
        'click',
        function () {
          $('.rt-slide-nav').slideUp();
          $('body').removeClass('slidemenuon');
        }
      );
    }
  };

  refreshData() {
    this.contactService.getAllLocation().subscribe({
      next: (res) => {
        this.locations = res.data;
      },
    });
    this.contactService.getAllPhone().subscribe({
      next: (res) => {
        this.phones = res.data;
      },
    });
    this.contactService.getAllSocialMedia().subscribe({
      next: (res) => {
        this.social_media = res.data;
      },
    });
  }
}
