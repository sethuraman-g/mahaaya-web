import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router, @Inject(DOCUMENT) private _doc: Document,) {
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
  navigateToAboutUs(id: string) {
    // this.router.navigate(['/about-us'], { fragment: id });
    this.router.navigate(['/about-us', id]);
    setTimeout(() => {
      if (id) {
        this._doc.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
}
