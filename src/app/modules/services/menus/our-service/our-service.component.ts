import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class OurServiceComponent {
  public accordionStates: Record<string, { showContent: boolean; imageSize: number }> = {};

  constructor(private router:Router, @Inject(DOCUMENT) private _doc: Document,) {
    this.initializeAccordionStates();
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
  initializeAccordionStates(): void {
    // Initialize accordion states here
    this.accordionStates['accordionExample'] = { showContent: false, imageSize: 200 };
    this.accordionStates['accordionExample1'] = { showContent: false, imageSize: 200 };
    this.accordionStates['accordionExample2'] = { showContent: false, imageSize: 200 };
    this.accordionStates['accordionExample3'] = { showContent: false, imageSize: 200 };
    this.accordionStates['accordionExample4'] = { showContent: false, imageSize: 200 };
    this.accordionStates['accordionExample5'] = { showContent: false, imageSize: 200 };
    this.accordionStates['accordionExample6'] = { showContent: false, imageSize: 200 };
    this.accordionStates['accordionExample7'] = { showContent: false, imageSize: 200 };
    this.accordionStates['accordionExample8'] = { showContent: false, imageSize: 200 };

    // Add more accordion states if needed
  }

  toggleAccordion(accordionId: string): void {
    const accordionState = this.accordionStates[accordionId];

    if (accordionState) {
      accordionState.showContent = !accordionState.showContent;
      accordionState.imageSize = accordionState.showContent ? 150 : 200;
    }
  }

}
