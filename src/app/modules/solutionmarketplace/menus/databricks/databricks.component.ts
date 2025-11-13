import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-databricks',
  templateUrl: './databricks.component.html',
  styleUrls: ['./databricks.component.scss'],
})
export class DatabricksComponent implements OnInit {
  databricksContent = [
    'Certified Databricks practitioners across engineering, ML, and data science',
    'Expertise in building scalable, secure, and governed data platforms',
    'Experience across Azure Databricks, AWS, and GCP integrations',
    'Deep alignment with industry-specific compliance and performance goals',
  ];

  dbCapabilities = [
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/home-icon.svg',
      title: 'Lakehouse architecture implementation',
    },
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/data-pipeline-icon.svg',
      title: 'Scalabale data engineering pipelines',
    },
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/analytics-icon.svg',
      title: 'Real-time analytics and dashboarding',
    },
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/ml-icon.svg',
      title: 'Advanced machine learning and MLOps',
    },
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/unity-icon.svg',
      title: 'Governance with Unity Catalog',
    },
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/llm-icon.svg',
      title: 'GenAI and LLM integration',
    },
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/migration-icon.svg',
      title: 'Migration from legacy platforms to Databricks',
    },
  ];

  solutionOfferings = [
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/lpm-icon.svg',
      title: 'Lakehouse Platform Modernization',
      description: 'Unify data warehousing and AI workloads to accelerate decision-making and reduce TCO.'
    },
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/dep-icon.svg',
      title: 'Data Engineering & ETL Pipelines',
      description: 'Design and deploy resilient pipelines using Delta Lake and DLT for structured and unstructured data.'
    },
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/mle-icon.svg',
      title: 'ML & AI Enablement',
      description: 'Operationalize ML with MLflow, Feature Store, AutoML, and LLMs to drive predictive and generative capabilities.'
    },
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/dgs-icon.svg',
      title: 'Data Governance & Security',
      description: 'Deploy Unity Catalog and cluster policies to enforce compliance, lineage, and fine-grained access.'
    },
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/md-icon.svg',
      title: 'BI Modernization with Databricks SQL',
      description: 'Migrate dashboards from traditional BI tools to Databricks SQL, improving performance and scalability.'
    },
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/ia-icon.svg',
      title: 'Industry Accelerators',
      description: 'Deploy prebuilt solution accelerators tailored for financial services, healthcare, retail, and manufacturing.'
    },
  ]

  dbUsecases = [
    {
      title: 'Customer 360 in Credit Union',
      description: 'Deploy Unity Catalog and cluster policies to enforce compliance, lineage, and fine-grained access.'
    },
    {
      title: 'Real-time Fraud Detection for Financial Services',
      description: 'Implement streaming data pipelines to identify and act on suspicious patterns with low latency.'
    },
    {
      title: 'Predictive Maintenance in Manufacturing',
      description: 'Analyze sensor and machine data to forecast equipment failures and optimize maintenance schedules.'
    },
    {
      title: 'Personalized Learning Pathways in Education',
      description: 'Use ML to recommend learning materials based on student performance, behavior, and preferences.'
    }
  ]

  deliveryApproachContents = [
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/discovery-icon.svg',
      title: 'Discovery & Assessment',
      description: 'Collaborate with stakeholders to understand current data maturity, identify pain points, and define clear business objectives.'
    },
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/architecture-icon.svg',
      title: 'Architecture & Design',
      description: 'Design a secure, scalable Lakehouse architecture tailored to your cloud environment, data volumes, and governance needs.'
    },
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/mvp-icon.svg',
      title: 'Rapid MVP Development',
      description: 'Deploy a working solution on a representative use case to demonstrate value and validate integration, performance, and cost expectations.'
    },
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/scalable-icon.svg',
      title: 'Scalable Implementation',
      description: 'Build and optimize production-grade data pipelines, ML workflows, and analytics dashboards using Databricks-native tools.'
    },
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/handoff-icon.svg',
      title: 'Enablement & Handoff',
      description: 'Upskill your team with best practices, reusable accelerators, and documentation to ensure sustainable platform adoption.'
    },
    {
      icon: '/assets/icon/solutionmarket/databricks-icons/evolution-icon.svg',
      title: 'Support & Evolution',
      description: 'Provide ongoing support, performance tuning, and roadmap planning to evolve your Databricks ecosystem over time.'
    },
  ]

  carouselOptions: OwlOptions = {
  loop: false,
  margin: 20,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,          // hide pagination dots
  nav: false,           // hide next/prev buttons
  autoWidth: true,      // allows variable card widths
  responsive: {
    0: { items: 1.2 },
    768: { items: 2.5 },
    1024: { items: 3.5 }
  }
};

  constructor() {}

  ngOnInit(): void { }
}
