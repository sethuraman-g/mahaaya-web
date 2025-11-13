import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './menus/analytics/analytics.component';
import { DataplatformComponent } from './menus/dataplatform/dataplatform.component';
import { ContainerComponent } from './container/container.component';
import { MicrosoftfabricComponent } from './menus/microsoftfabric/microsoftfabric.component';
import { SecuritygovernanceComponent } from './menus/securitygovernance/securitygovernance.component';
import { ApplicationmodernizationComponent } from './menus/applicationmodernization/applicationmodernization.component';
import { AiSolutionsComponent } from './menus/ai-solutions/ai-solutions.component';
import { DatabricksComponent } from './menus/databricks/databricks.component';
import { SalesforceComponent } from './menus/salesforce/salesforce.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      {
        path: 'analytics',
        component: AnalyticsComponent,
        data: {
          seo: {
            title: 'Analytics Revamp | Data Transformation',
            metaTags: [
              {
                name: 'description',
                content:
                  'Unlock the power of data with analytics modernization. Elevate insights, drive innovation,and make data-driven decisions for your business',
              },
              {
                name: 'keywords',
                content: 'Analytics, Data, POV demonstration',
              },
              { name: 'MobileOptimized', content: 'width' },
              { name: 'HandheldFriendly', content: 'true' },
              {
                property: 'og:image',
                content:
                  'https://mahaaya.com/assets/og-img/analyticsbanner.jpg',
              },
              { property: 'og:image:width', content: '200' },
              { property: 'og:image:height', content: '200' },
              { property: 'og:image:type', content: 'image/jpg' },
              {
                property: 'og:image:url',
                content:
                  'https://mahaaya.com/assets/og-img/analyticsbanner.jpg',
              },
              {
                property: 'og:title',
                content: 'Analytics Revamp | Data Transformation',
              },
              { property: 'og:type', content: 'Website' },
              {
                property: 'og:description',
                content:
                  'Unlock the power of data with analytics modernization. Elevate insights, drive innovation,and make data-driven decisions for your business',
              },
              { property: 'og:site_name', content: 'Mahaaya' },
              {
                property: 'og:url',
                content: 'https://mahaaya.com/solutionmarketplace/analytics',
              },
            ],
          },
        },
      },
      {
        path: 'dataplatform',
        component: DataplatformComponent,
        data: {
          seo: {
            title: 'Seamless Data & Platform Migration',
            metaTags: [
              {
                name: 'description',
                content:
                  'Seamless data and platform migration solutions. Safely transfer, optimize, and modernize your data and infrastructure for business growth',
              },
              {
                name: 'keywords',
                content:
                  'Migration, Data Migration,Platform Migration,POV demonstration',
              },
              { name: 'MobileOptimized', content: 'width' },
              { name: 'HandheldFriendly', content: 'true' },
              {
                property: 'og:image',
                content: 'https://mahaaya.com/assets/og-img/platformbanner.jpg',
              },
              { property: 'og:image:width', content: '200' },
              { property: 'og:image:height', content: '200' },
              { property: 'og:image:type', content: 'image/png' },
              {
                property: 'og:title',
                content: 'Seamless Data & Platform Migration',
              },
              { property: 'og:type', content: 'Website' },
              {
                property: 'og:description',
                content:
                  'Seamless data and platform migration solutions. Safely transfer, optimize, and modernize your data and infrastructure for business growth',
              },
              { property: 'og:image:type', content: 'image/jpg' },
              {
                property: 'og:image:url',
                content: 'https://mahaaya.com/assets/og-img/platformbanner.jpg',
              },
              { property: 'og:site_name', content: 'Mahaaya' },
              {
                property: 'og:url',
                content: 'https://mahaaya.com/solutionmarketplace/dataplatform',
              },
            ],
          },
        },
      },
      {
        path: 'aiSolutions',
        component: AiSolutionsComponent,
        data: {
          seo: {
            title: 'AI Solutions',
            metaTags: [
              {
                name: 'description',
                content:
                  'Seamless data and platform migration solutions. Safely transfer, optimize, and modernize your data and infrastructure for business growth',
              },
              {
                name: 'keywords',
                content:
                  'Migration, Data Migration,Platform Migration,POV demonstration',
              },
              { name: 'MobileOptimized', content: 'width' },
              { name: 'HandheldFriendly', content: 'true' },
              {
                property: 'og:image',
                content: 'https://mahaaya.com/assets/og-img/aiSolutions.png',
              },
              { property: 'og:image:width', content: '200' },
              { property: 'og:image:height', content: '200' },
              { property: 'og:image:type', content: 'image/png' },
              { property: 'og:title', content: 'AI Solutions' },
              { property: 'og:type', content: 'Website' },
              {
                property: 'og:description',
                content:
                  'Seamless data and platform migration solutions. Safely transfer, optimize, and modernize your data and infrastructure for business growth',
              },
              { property: 'og:image:type', content: 'image/jpg' },
              {
                property: 'og:image:url',
                content: 'https://mahaaya.com/assets/og-img/aiSolutions.png',
              },
              { property: 'og:site_name', content: 'Mahaaya' },
              {
                property: 'og:url',
                content: 'https://mahaaya.com/solutionmarketplace/aiSolutions',
              },
            ],
          },
        },
      },
      {
        path: 'microfab',
        component: MicrosoftfabricComponent,
        data: {
          seo: {
            title: 'Microsoft Fabric | Powering Your World',
            metaTags: [
              {
                name: 'description',
                content:
                  'Explore the power of Microsoft Fabric. Transform your business with cutting-edge technology solutions and seamless integration',
              },
              {
                name: 'keywords',
                content:
                  'Microsoft Fabric,Data Fabric, Fabric,POV demonstration',
              },
              { name: 'MobileOptimized', content: 'width' },
              { name: 'HandheldFriendly', content: 'true' },
              {
                property: 'og:image',
                content: 'https://mahaaya.com/assets/og-img/microbanner.jpg',
              },
              { property: 'og:image:width', content: '200' },
              { property: 'og:image:height', content: '200' },
              { property: 'og:image:type', content: 'image/png' },
              {
                property: 'og:title',
                content: 'Microsoft Fabric | Powering Your World',
              },
              { property: 'og:type', content: 'Website' },
              {
                property: 'og:description',
                content:
                  'Explore the power of Microsoft Fabric. Transform your business with cutting-edge technology solutions and seamless integration',
              },
              { property: 'og:image:type', content: 'image/jpg' },
              {
                property: 'og:image:url',
                content: 'https://mahaaya.com/assets/og-img/microbanner.jpg',
              },
              { property: 'og:site_name', content: 'Mahaaya' },
              {
                property: 'og:url',
                content: 'https://mahaaya.com/solutionmarketplace/microfab',
              },
            ],
          },
        },
      },
      {
        path: 'securitygovernance',
        component: SecuritygovernanceComponent,
        data: {
          seo: {
            title: 'Streamlined Security & Governance',
            metaTags: [
              {
                name: 'description',
                content:
                  'Enhance security and governance practices. Discover comprehensive solutions to protect your organization and ensure compliance',
              },
              {
                name: 'keywords',
                content: 'Security, Data Governance,POV demonstration',
              },
              { name: 'MobileOptimized', content: 'width' },
              { name: 'HandheldFriendly', content: 'true' },
              {
                property: 'og:image',
                content:
                  'https://mahaaya.com/assets/og-img/analyticsbanner.jpg',
              },
              { property: 'og:image:width', content: '200' },
              { property: 'og:image:height', content: '200' },
              { property: 'og:image:type', content: 'image/png' },
              {
                property: 'og:title',
                content: 'Streamlined Security & Governance',
              },
              { property: 'og:type', content: 'Website' },
              {
                property: 'og:description',
                content:
                  'Enhance security and governance practices. Discover comprehensive solutions to protect your organization and ensure compliance',
              },
              { property: 'og:image:type', content: 'image/jpg' },
              {
                property: 'og:image:url',
                content:
                  'https://mahaaya.com/assets/og-img/analyticsbanner.jpg',
              },
              { property: 'og:site_name', content: 'Mahaaya' },
              {
                property: 'og:url',
                content:
                  'https://mahaaya.com/solutionmarketplace/securitygovernance',
              },
            ],
          },
        },
      },
      {
        path: 'application',
        component: ApplicationmodernizationComponent,
        data: {
          seo: {
            title: 'Innovative Application Modernization',
            metaTags: [
              {
                name: 'description',
                content:
                  'Experience application modernization at its best. Modernize, optimize, and innovate your software for a brighter digital future',
              },
              {
                name: 'keywords',
                content:
                  'Application,Application ModernizationPOV demonstration',
              },
              { name: 'MobileOptimized', content: 'width' },
              { name: 'HandheldFriendly', content: 'true' },
              {
                property: 'og:image',
                content:
                  'https://mahaaya.com/assets/og-img/applicationbanner.jpg',
              },
              { property: 'og:image:width', content: '200' },
              { property: 'og:image:height', content: '200' },
              { property: 'og:image:type', content: 'image/png' },
              {
                property: 'og:title',
                content: 'Innovative Application Modernization',
              },
              { property: 'og:type', content: 'Website' },
              {
                property: 'og:description',
                content:
                  'Experience application modernization at its best. Modernize, optimize, and innovate your software for a brighter digital future',
              },
              { property: 'og:image:type', content: 'image/jpg' },
              {
                property: 'og:image:url',
                content:
                  'https://mahaaya.com/assets/og-img/applicationbanner.jpg',
              },
              { property: 'og:site_name', content: 'Mahaaya' },
              {
                property: 'og:url',
                content: 'https://mahaaya.com/solutionmarketplace/application',
              },
            ],
          },
        },
      },
      {
        path: 'databricks',
        component: DatabricksComponent,
        data: {
          seo: {
            title:
              'Databricks Solutions | Unified Analytics & AI for the Modern Enterprise',
            metaTags: [
              {
                name: 'description',
                content:
                  'Accelerate innovation with Databricks solutions from Mahaaya. Unify data, analytics, and AI with scalable cloud platforms. Drive real-time insights, ML enablement, and industry accelerators for enterprise success.',
              },
              {
                name: 'keywords',
                content:
                  'Databricks, Unified Analytics, AI Solutions, Data Engineering, ML Ops, Data Governance, ETL, Cloud Data Platform, Mahaaya Databricks Partner, Industry Accelerators, Data Modernization',
              },
              { name: 'MobileOptimized', content: 'width' },
              { name: 'HandheldFriendly', content: 'true' },
              {
                property: 'og:image',
                content: 'https://mahaaya.com/assets/og-img/databricks.png',
              },
              { property: 'og:image:width', content: '200' },
              { property: 'og:image:height', content: '200' },
              { property: 'og:image:type', content: 'image/jpg' },
              {
                property: 'og:image:url',
                content: 'https://mahaaya.com/assets/og-img/databricks.png',
              },
              {
                property: 'og:title',
                content:
                  'Databricks Solutions | Unified Analytics & AI for the Modern Enterprise',
              },
              { property: 'og:type', content: 'Website' },
              {
                property: 'og:description',
                content:
                  'Accelerate innovation with Databricks solutions from Mahaaya. Unify data, analytics, and AI with scalable cloud platforms. Drive real-time insights, ML enablement, and industry accelerators for enterprise success.',
              },
              { property: 'og:site_name', content: 'Mahaaya' },
              {
                property: 'og:url',
                content: 'https://mahaaya.com/solutionmarketplace/databricks',
              },
            ],
          },
        },
      },
      {
        path: 'salesforce',
        component: SalesforceComponent,
        data: {
          seo: {
            title:
              'Salesforce Services at Mahaaya | Simplifying Transformation, Amplifying Value',
            metaTags: [
              {
                name: 'description',
                content:
                  'Unlock the full power of Salesforce with Mahaaya. Our certified experts deliver strategy, implementation, automation, and AI-driven insights to simplify transformation and amplify business value.',
              },
              {
                name: 'keywords',
                content:
                  'Salesforce Services, Salesforce Implementation, Salesforce Consulting, Salesforce Strategy, Salesforce Automation, CRM Solutions, Data Cloud, Field Service, Revenue Cloud, Integration, Mahaaya Salesforce Partner, AI for Salesforce',
              },
              { name: 'MobileOptimized', content: 'width' },
              { name: 'HandheldFriendly', content: 'true' },
              {
                property: 'og:image',
                content: 'https://mahaaya.com/assets/og-img/salesforce-banner.png',
              },
              { property: 'og:image:width', content: '200' },
              { property: 'og:image:height', content: '200' },
              { property: 'og:image:type', content: 'image/png' },
              {
                property: 'og:image:url',
                content: 'https://mahaaya.com/assets/og-img/salesforce-banner.png',
              },
              {
                property: 'og:title',
                content:
                  'Salesforce Services at Mahaaya | Simplifying Transformation, Amplifying Value',
              },
              { property: 'og:type', content: 'Website' },
              {
                property: 'og:description',
                content:
                  'At Mahaaya, we help businesses harness Salesforce’s full potential through strategy, implementation, and innovation — driving measurable outcomes across your digital journey.',
              },
              { property: 'og:site_name', content: 'Mahaaya' },
              {
                property: 'og:url',
                content: 'https://mahaaya.com/solutionmarketplace/salesforce',
              },
            ],
          },
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionmarketplaceRoutingModule {}
