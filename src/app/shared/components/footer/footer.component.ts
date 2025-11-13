import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(@Inject(DOCUMENT) private _doc: Document, private router:Router) {
  }
  navigateToElement(id: string) {
    this.router.navigateByUrl(`/services/our-service/#${id}`);
    setTimeout(() => {
      if (id) {
        const targetElement = this._doc.getElementById(id);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          const rect = targetElement.getBoundingClientRect();
          const desiredScrollY = window.scrollY + rect.top - 350;
          window.scrollTo({
            top: desiredScrollY,
            behavior: 'smooth',
          });
        }
      }
    }, 100);
  }

  navigateToAboutUs(id: string) {
    this.router.navigate(['/about-us'], { fragment: id });
  }
}
