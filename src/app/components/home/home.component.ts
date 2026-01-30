import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Route, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';

interface CommonCardDataType {
  icon: string;
  title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  clientOptions!: OwlOptions;
  clientOptionstwo!: OwlOptions;
  activeIndex = 0;
  intervalId: any;
  tabs = [
    { label: 'Customer Data Platform',title: 'Elevate Member Loyalty:', content: 'Transform Credit Union Experiences with Cutting-Edge Data & AI Solutions!' },
    { label: 'Accelerate Transcript Evaluation',title: 'Accelerate Transcript Evaluation', content: 'Harness AI for fast-tracking the admission process at scale.' },
    { label: 'Virtual Assistant for Finance Teams',title: 'Your Virtual Assistant for Finance Teams', content: 'Simplify reconciliations, speed up reporting, and deliver real-time insights with AI.' },
    { label: 'Fast-track Your Data Integration Efforts',title: 'Fast-track Your Data Integration Efforts', content: "Use Mahaaya's Data Accelerator Framework to halve your time-to-market!" },
    { label: 'Modernize Analytics, Optimize Spend',title: 'Modernize Analytics, Optimize Spend', content: 'Make effective decisions and improve business agility while reducing costs by 50%.' },
    { label: 'Detect Copyright at Scale',title: 'Detect Copyright at Scale:', content: 'Leverage AI to safeguard property management firms from compliance issues!' },
    { label: 'Agentic Process Automation',title: 'Speed up the Loan Application Process:', content: 'Easy form filling with an intelligent assistant and seamless documentation.' },
  ];

  aiCapablitiesData: CommonCardDataType[] = [
    { icon: '/assets/icon/ai/education.svg', title: 'Education & Universities' },
    { icon: '/assets/icon/ai/financial.svg', title: 'Financial Institutions' },
    { icon: '/assets/icon/ai/realEstate.svg', title: 'Real Estate Intelligence' },
    { icon: '/assets/icon/ai/accounting.svg', title: 'Finance & Accounting' },
    { icon: '/assets/icon/ai/retail.svg', title: 'Retail & E-commerce' },
    { icon: '/assets/icon/ai/cyberSecurity.svg', title: 'Cybersecurity & SIEM' },
    { icon: '/assets/icon/ai/copyRight.svg', title: 'Copyright Detection' },
    { icon: '/assets/icon/ai/documentInteligent.svg', title: 'Document Intelligence' },
    { icon: '/assets/icon/ai/conversationAi.svg', title: 'Conversational AI'},
    { icon: '/assets/icon/ai/education.svg', title: 'Education & Universities' },
    { icon: '/assets/icon/ai/financial.svg', title: 'Financial Institutions' },
    { icon: '/assets/icon/ai/realEstate.svg', title: 'Real Estate Intelligence' },
    { icon: '/assets/icon/ai/accounting.svg', title: 'Finance & Accounting' },
    { icon: '/assets/icon/ai/retail.svg', title: 'Retail & E-commerce' },
    { icon: '/assets/icon/ai/cyberSecurity.svg', title: 'Cybersecurity & SIEM' },
    { icon: '/assets/icon/ai/copyRight.svg', title: 'Copyright Detection' },
    { icon: '/assets/icon/ai/documentInteligent.svg', title: 'Document Intelligence' },
    { icon: '/assets/icon/ai/conversationAi.svg', title: 'Conversational AI'}
  ];

  serviceOfferingsData: CommonCardDataType[] = [
    { icon: '/assets/icon/ai/home.svg', title: 'ARCHITECTURE & AI Consulting' },
    { icon: '/assets/icon/ai/AgenticAutomation.svg', title: 'Agentic Automation'},
    { icon: '/assets/icon/ai/Accelerators.svg', title: 'Accelerators' },
    { icon: '/assets/icon/ai/AzureAiSupport.svg', title: 'Azure AI Infrastructure Support' },
    { icon: '/assets/icon/ai/IndustryExpertise.svg', title: 'Industry Expertise' },
    { icon: '/assets/icon/ai/AI.svg', title: 'AI Adoption & Change Management' },
    { icon: '/assets/icon/ai/rapid.svg', title: 'Rapid Prototyping' },
    { icon: '/assets/icon/ai/ML.svg', title: 'ML & Al Engineering Staffing' },
    { icon: '/assets/icon/ai/aiSolution.svg', title: 'AI Solution Design' },
    { icon: '/assets/icon/ai/training.svg', title: 'Training & Adoptions' },
    { icon: '/assets/icon/ai/aiSecurityGovernance.svg', title: 'AI Security & Governance' },
    { icon: '/assets/icon/ai/llm.svg', title: 'LLM Testing Framework' }
  ]

  constructor(@Inject(DOCUMENT) private _doc: Document, private router: Router) {
  }
  ngOnInit() {
    this.getCarouselOptions();
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.tabs.length;
    }, 4000);
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

  setActive(index: number) {
    this.activeIndex = index;
  }

  getTabTransform(index: number): string {
  const total = this.tabs.length;
  const angle = (360 / total) * index;
  const rad = (angle * Math.PI) / 180;

  // ✅ Responsive radius
  const isSmallScreen = window.innerWidth <= 574.98;
  const radius = isSmallScreen ? 120 : 185;

  const x = radius * Math.cos(rad);
  const y = radius * Math.sin(rad);

  return `translate(${x}px, ${y}px)`;
}

  navigateToSummit(event: Event) {
    // Prevent navigation if clicking on carousel controls
    const target = event.target as HTMLElement;
    if (target.closest('.carousel-control-prev') || 
        target.closest('.carousel-control-next') || 
        target.closest('.carousel-indicators')) {
      return;
    }
    this.router.navigate(['/summit']);
  }
}
