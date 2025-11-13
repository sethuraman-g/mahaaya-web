import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  clientOptions!: OwlOptions;
  clientOptionstwo!: OwlOptions
  constructor(@Inject(DOCUMENT) private _doc: Document, private router: Router) {
  }
  ngOnInit() {
    this.getCarouselOptions();
    // AOS.init();
  }

  navigateToElement(id: string) {
    this.router.navigateByUrl(`/services/our-service/#${id}`);
    setTimeout(() => {
      if (id) {
        const targetElement = this._doc.getElementById(id);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          const rect = targetElement.getBoundingClientRect();
          const desiredScrollY = window.scrollY + rect.top - 200;
          window.scrollTo({
            top: desiredScrollY,
            behavior: 'smooth',
          });
        }
      }
    }, 100);
  }

  getCarouselOptions() {
    this.clientOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      autoWidth: false,
      center: true,
      autoplay: true,
      autoplayHoverPause: true,
      navSpeed: 500,
      items: 4,
      stagePadding: 28,
      margin: 20,
      navText: ['', '<i class="fa-solid fa-chevron-right"></i>'],
      nav: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      responsive: {
        0: {
          stagePadding: 0,
          items: 2,
        },
        700: {
          stagePadding: 0,
          items: 4.3,
        }
      },
    };
    this.clientOptionstwo = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      autoWidth: false,
      center: true,
      autoplay: true,
      autoplayHoverPause: true,
      navSpeed: 500,
      items: 2,
      stagePadding: 28,
      margin: 20,
      navText: ['<img class="img" src="/assets/icon/clients/left-arrow.svg">', '<img class="img" src="/assets/icon/clients/right-arrow.svg">'],
      nav: true,
      // animateOut: 'fadeOut',
      // animateIn: 'fadeIn',
      responsive: {
        0: {
          stagePadding: 0,
          items: 1,
          nav: true,
        },
        700: {
          stagePadding: 0,
          items: 1,
          nav: true,
        }
      },
    };
  }
}
