import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salesforce',
  templateUrl: './salesforce.component.html',
  styleUrls: ['./salesforce.component.scss'],
})
export class SalesforceComponent implements OnInit {
  activeIndex = 0;
salesforceExpertises = [
    {
      id: 1,
      title: 'Strategy & Advisory',
      description:
        'We start by understanding your business inside-out — mapping goals, challenges, and opportunities to the Salesforce platform. Our strategic approach ensures that every implementation or enhancement is rooted in clear business value.',
    content: {
        title: 'Our strategy services include:',
        points: [
          'Platform assessment and roadmap design',
          'Data and AI readiness planning',
          'Process transformation consulting',
          'Business case and ROI definition',
        ],
    }
    },
    {
      id: 2,
      title: 'Salesforce Implementation & Expansion',
      description:
        'We design and deliver Salesforce solutions that scale — connecting customer, service, and revenue operations in one intelligent platform.',
        content: {
          title: 'Core Expertise:',
          points: [
            'Sales Cloud – Streamline customer journeys from lead to revenue',
            'Service Cloud – Deliver faster, smarter, personalised service experiences',
            'Marketing Cloud – Engage customers with smarter, unified, and automated cross channel marketing journeys',
            'Experience Cloud – Connect partners, customers, and communities with unified data',
          ],
        }
    },
    {
      id: 3,
      title: 'Revenue Cloud Advanced',
      description:
        'We specialise in Revenue Cloud Advanced, enabling you to automate the quote-to-cash lifecycle and create seamless revenue operations.',
        content: {
          title: 'Capabilities include:',
          points: [
            'Advanced CPQ and Billing setup for complex product catalogues',
            'Subscription and usage-based models',
            'Revenue recognition automation and finance integration',
            'End-to-end visibility into pipeline, revenue, and forecasting',
          ],
          description: 'Our goal: turn your sales process into a predictable, data-driven growth engine.',
        }
    },
    {
      id: 4,
      title: 'Field Service Excellence',
      description:
        'Mahaaya helps service organisations optimize workforce operations through Salesforce Field Service.',
        content: {
          title: 'Our focus areas:',
          points: [
            'Intelligent scheduling and resource optimization',
            'Real-time technician enablement via mobile apps',
            'IoT, parts, and asset tracking integration',
            'Service analytics for continuous performance improvement',
          ],
          description: 'We connect your service teams, customers, and data — ensuring every field interaction drives loyalty and efficiency.',
        }
    },
    {
      id: 5,
      title: 'Agentforce & AI Innovation',
      description:
        'We are preparing clients for the next wave of Salesforce intelligence with Agentforce — where AI meets customer service.',
        content: {
          title: 'We help you:',
          points: [
            'Deploy intelligent service agents powered by Einstein GPT',
            'Enable AI-assisted case management and knowledge suggestions',
            'Integrate conversational interfaces for customers and employees',
            'Build trust and transparency through responsible AI adoption',
          ],
          description: 'Our AI solutions combine Einstein, Data Cloud, and automation to enhance decision-making and customer experience.',
        }
    },
    {
      id: 6,
      title: 'Data Cloud & Data Activation',
      description:
        'At Mahaaya, data is at the centre of everything we do. We architect and deploy Salesforce Data Cloud to unify customer data across touchpoints — powering analytics, AI, and personalisation.',
        content: {
          title: 'We deliver:',
          points: [
            'Data unification and identity resolution',
            'Clean, enriched and governed data pipelines',
            'Data Cloud + Tableau integration for real-time insights',
            'AI readiness and predictive analytics enablement',
          ],
          description: 'With Data Cloud, we turn fragmented data into connected intelligence — fuel for smarter engagement.',
        }
    },
    {
      id: 7,
      title: 'Integration & Automation',
      description:
        'We connect Salesforce to your enterprise ecosystem — from ERP and finance to marketing and analytics — ensuring seamless, automated workflows.',
        content: {
          title: 'Capabilities:',
          points: [
            'MuleSoft and API-led integrations',
            'Slack-first process automation',
            'Intelligent notifications and task orchestration',
            'Unified data flow for a single source of truth',
          ],
        }
    },
    {
      id: 8,
      title: 'Managed & Augmented Services',
      description:
        'Transformation does not end at go-live. Our Managed Services and Staff Augmentation models ensure your Salesforce ecosystem evolves with your business — continuously improving performance and adoption.',
        content: {
          title: 'Support includes:',
          points: [
            'Platform monitoring and optimization',
            'Data governance and user enablement',
            'On-demand admin, analyst, and architect resources',
          ],
        }
    },
  ];


  salesforceServices = [
    {
      icon: '/assets/icon/solutionmarket/salesforce-icons/specialised-icon.svg',
      title: 'Specialised Expertise',
      description:
        'Focused Proficiency in revenue cloud Advanced, Field Service, Agentforce, and Data Cloud - delivering solutions that blend precision and innovation.',
    },
    {
      icon: '/assets/icon/solutionmarket/salesforce-icons/alignment-icon.svg',
      title: 'Business + Platform Alignment',
      description:
        'We bridge strategic objectives with technical design - ensuring Salesforce becomes a growth enabler, not just a CRM.',
    },
    {
      icon: '/assets/icon/solutionmarket/salesforce-icons/user-icon.svg',
      title: 'Part of the Numentica Group',
      description:
        'Gain access to cross-domain capabilities across cloud, digital, and data transformation when your ambitions scale.',
    },
    {
      icon: '/assets/icon/solutionmarket/salesforce-icons/data-design-icon.svg',
      title: 'Data-First by Design',
      description:
        'Our Projects start with unified, clean, and actionable data - unlocking automation, analytics, and AI potential.',
    },
    {
      icon: '/assets/icon/solutionmarket/salesforce-icons/agile-icon.svg',
      title: 'Agile, Human, and Outcome-Driven',
      description:
        'We’re colaborative, transparent, and focused on creating long-term value - not just project completions.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  setActiveIndex(activeIndexValue: number) {
    this.activeIndex = activeIndexValue;
  }
}
