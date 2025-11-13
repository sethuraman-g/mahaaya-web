import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai-solutions',
  templateUrl: './ai-solutions.component.html',
  styleUrls: ['./ai-solutions.component.scss']
})
export class AiSolutionsComponent implements OnInit {

 tabs = [
    { label: 'Customer Data Platform',title: 'Elevate Member Loyalty:', content: 'Transform Credit Union Experiences with Cutting-Edge Data & AI Solutions!' },
    { label: 'Accelerate Transcript Evaluation',title: 'Accelerate Transcript Evaluation', content: 'Harness AI for fast-tracking the admission process at scale.' },
    { label: 'Virtual Assistant for Finance Teams',title: 'Your Virtual Assistant for Finance Teams', content: 'Simplify reconciliations, speed up reporting, and deliver real-time insights with AI.' },
    { label: 'Fast-track Your Data Integration Efforts',title: 'Fast-track Your Data Integration Efforts', content: "Use Mahaaya's Data Accelerator Framework to halve your time-to-market!" },
    { label: 'Modernize Analytics, Optimize Spend',title: 'Modernize Analytics, Optimize Spend', content: 'Make effective decisions and improve business agility while reducing costs by 50%.' },
    { label: 'Detect Copyright at Scale',title: 'Detect Copyright at Scale:', content: 'Leverage AI to safeguard property management firms from compliance issues!' },
    { label: 'Agentic Process Automation',title: 'Speed up the Loan Application Process:', content: 'Easy form filling with an intelligent assistant and seamless documentation.' },
  ];

  activeIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.tabs.length;
    }, 4000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  setActive(index: number) {
    this.activeIndex = index;
  }
// getTabTransform(index: number): string {
//   const total = this.tabs.length;
//   const angle = (360 / total) * index;
//   const rad = (angle * Math.PI) / 180;
//   const radius = 185; // Adjust based on image size (140px wide)
//   const x = radius * Math.cos(rad);
//   const y = radius * Math.sin(rad);
//   return `translate(${x}px, ${y}px)`;
// }
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


}
