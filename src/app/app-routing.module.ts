import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './shared/pages/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SolutionmarketComponent } from './components/solutionmarket/solutionmarket.component';
import { CustomerComponent } from './components/customer/customer.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { OurlocationComponent } from './components/ourlocation/ourlocation.component';
import { EventsComponent } from './components/events/events.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogContentComponent } from './components/blog-content/blog-content.component';
import { Blog2ContentComponent } from './components/blog2-content/blog2-content.component';
import { Blog3ContentComponent } from './components/blog3-content/blog3-content.component';
import { OurServiceComponent } from './modules/services/menus/our-service/our-service.component';
import { LeadershipteamComponent } from './components/leadershipteam/leadershipteam.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: "enabled",
  initialNavigation: 'enabledBlocking'
}
const routes: Routes = [
  {
    path: '', component: HomeComponent, pathMatch: 'full',
    data: {
      seo: {
        title: 'Mahaaya Home',
        metaTags: [
          { name: 'description', content: 'Where digital innovation, analytics excellence, and AI integration converge to pave the way for a marter, more agile future' },
          { name: 'keywords', content: 'Data, Transformation, Analytics, AI, Fabrics' },
          { name: 'writer', content: 'Mahaaya' },
          { name: 'theme-color', content: '#ffff' },
          { name: 'MobileOptimized', content: 'width' },
          { name: 'HandheldFriendly', content: 'true' },
          { property: 'og:title', content: 'Mahaaya Home' },
          { property: 'og:type', content: 'Website' },
          { property: 'og:description', content: 'Where digital innovation, analytics excellence, and AI integration converge to pave the way for a marter, more agile future' },
          { property: 'og:image', content: "https://mahaaya.com/assets/og-img/Mahaaya-logo.jpg" },
          { property: 'og:image:width', content: '200' },
          { property: 'og:image:height', content: '200' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:site_name', content: 'Mahaaya' },
          { property: 'og:url', content: 'https://mahaaya.com' }
        ]
      }
    }

  },

  { path: 'home/:id', component: HomeComponent },
  {
    path: 'about-us', component: AboutComponent,
    data: {
      seo: {
        title: 'About Mahaaya',
        metaTags: [
          { name: 'description', content: 'Discover the essence of Mahaaya. We`re more than a business, we`re a story of passion, innovation, and commitment to excellence.' },
          { name: 'keywords', content: 'About Mahaaya, company overview, business background, about us, corporate story' },
          { name: 'MobileOptimized', content: 'width' },
          { name: 'HandheldFriendly', content: 'true' },
          { property: 'og:image', content: "https://mahaaya.com//assets/og-img/aboutbanner.jpg" },
          { property: 'og:image:width', content: '200' },
          { property: 'og:image:height', content: '200' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:title', content: 'About Mahaaya' },
          { property: 'og:type', content: 'Website' },
          { property: 'og:description', content: 'Discover the essence of Mahaaya. We`re more than a business, we`re a story of passion, innovation, and commitment to excellence.' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:image:url', content: "https://mahaaya.com//assets/og-img/aboutbanner.jpg" },
          { property: 'og:site_name', content: 'Mahaaya' },
          { property: 'og:url', content: 'https://www.mahaaya.com/about-us' }
        ]
      }
    }
  },
  {
    path: 'customer', component: CustomerComponent,
    data: {
      seo: {
        title: 'Mahaaya | Our Clients',
        metaTags: [
          { name: 'description', content: 'Explore success stories at Mahaaya. Trusted by diverse clients, our collaborations redefine excellence. Join us for transformative solutions!' },
          { name: 'keywords', content: 'Client testimonials, Success stories, trusted partnerships, diverse clients, transformative impact.' },
          { name: 'MobileOptimized', content: 'width' },
          { name: 'HandheldFriendly', content: 'true' },
          { property: 'og:image', content: "https://mahaaya.com//assets/og-img/customerbanner.jpg" },
          { property: 'og:image:width', content: '200' },
          { property: 'og:image:height', content: '200' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:title', content: 'Mahaaya | Our Clients' },
          { property: 'og:type', content: 'Website' },
          { property: 'og:description', content: 'Explore success stories at Mahaaya. Trusted by diverse clients, our collaborations redefine excellence. Join us for transformative solutions!' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:image:url', content: "https://mahaaya.com//assets/og-img/customerbanner.jpg" },
          { property: 'og:site_name', content: 'Mahaaya' },
          { property: 'og:url', content: 'https://mahaaya.com/solutionmarket' }
        ]
      }
    }
  },
  {
    path: 'event', component: EventsComponent,
    data: {
      seo: {
        title: 'Mahaaya | Events',
        metaTags: [
          { name: 'description', content: 'Explore a calendar filled with opportunities to connect, grow, and stay ahead in your industry. Our Events page is your gateway to learning, and networking.' },
          { name: 'keywords', content: 'Tech talk, networking opportunities, event calendar, industry workshops.' },
          { name: 'MobileOptimized', content: 'width' },
          { name: 'HandheldFriendly', content: 'true' },
          { property: 'og:image', content: "https://mahaaya.com//assets/og-img/events-Banner.jpg" },
          { property: 'og:image:width', content: '200' },
          { property: 'og:image:height', content: '200' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:title', content: 'Mahaaya | Events' },
          { property: 'og:type', content: 'Website' },
          { property: 'og:description', content: 'Explore a calendar filled with opportunities to connect, grow, and stay ahead in your industry. Our Events page is your gateway to learning, and networking.' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:image:url', content: "https://mahaaya.com//assets/og-img/events-Banner.jpg" },
          { property: 'og:site_name', content: 'Mahaaya' },
          { property: 'og:url', content: 'https://www.mahaaya.com/event' }
        ]
      }
    }
  },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog-details', component: BlogContentComponent },
  { path: 'blog2-details', component: Blog2ContentComponent },
  { path: 'blog3-details', component: Blog3ContentComponent },
  {
    path: 'solutionmarket', component: SolutionmarketComponent,
    data: {
      seo: {
        title: 'Discover Solutions: Your Marketplace Hub',
        metaTags: [
          { name: 'description', content: 'Discover a diverse marketplace of solutions to address your needs. Connect with providers and find the right solutions for your challenges' },
          { name: 'keywords', content: 'Solution, Marketplace, POVs' },
          { name: 'MobileOptimized', content: 'width' },
          { name: 'HandheldFriendly', content: 'true' },
          { property: 'og:image', content: "https://mahaaya.com//assets/og-img/solutionbanner.jpg" },
          { property: 'og:image:width', content: '200' },
          { property: 'og:image:height', content: '200' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:title', content: 'Discover Solutions: Your Marketplace Hub' },
          { property: 'og:type', content: 'Website' },
          { property: 'og:description', content: 'Discover a diverse marketplace of solutions to address your needs. Connect with providers and find the right solutions for your challenges' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:image:url', content: "https://mahaaya.com//assets/og-img/solutionbanner.jpg" },
          { property: 'og:site_name', content: 'Mahaaya' },
          { property: 'og:url', content: 'https://mahaaya.com/solutionmarket' }
        ]
      }
    }
  },

  {
    path: 'services', component: OurServiceComponent,
    data: {
      seo: {
        title: 'Comprehensive Technology Solutions & Strategies',
        metaTags: [
          { name: 'description', content: 'Unlock growth with our expert services: Cloud Advisory, Data Strategy, Digital Transformation, Technology Consulting, and more.' },
          { name: 'keywords', content: 'Cloud Advisory Services, Data and Architectural Strategy, Digital Transformation Strategy, Cloud Optimization Strategy, Technology Consulting, Cloud Modernization, Data Engineering & Visualization, Analytics Modernization, Data Governance, AI & Cognitive Services, Security and Compliance' },
          { name: 'MobileOptimized', content: 'width' },
          { name: 'HandheldFriendly', content: 'true' },
          { property: 'og:image', content: "https://mahaaya.com//assets/og-img/services.jpg" },
          { property: 'og:image:width', content: '200' },
          { property: 'og:image:height', content: '200' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:title', content: 'Comprehensive Technology Solutions & Strategies' },
          { property: 'og:type', content: 'Website' },
          { property: 'og:description', content: 'Unlock growth with our expert services: Cloud Advisory, Data Strategy, Digital Transformation, Technology Consulting, and more.' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:image:url', content: "https://mahaaya.com//assets/og-img/services.jpg" },
          { property: 'og:site_name', content: 'Mahaaya' },
          { property: 'og:url', content: 'https://www.mahaaya.com/services/our-service' }
        ]
      }
    }
  },
  {
    path: 'privacypolicy', component: PrivacypolicyComponent,
    data: {
      seo: {
        title: 'Mahaaya Privacy Policy',
        metaTags: [
          { name: 'description', content: 'Your privacy matters. Explore Mahaaya`s commitment to safeguarding your information in our clear and concise Privacy Policy.' },
          { name: 'keywords', content: 'Privacy policy, Data Protection, User Privacy, Confidentiality, Mahaaya Privacy, Data Safety' },
          { name: 'MobileOptimized', content: 'width' },
          { name: 'HandheldFriendly', content: 'true' },
          { property: 'og:image', content: "https://mahaaya.com//assets/og-img/services.jpg" },
          { property: 'og:image:width', content: '200' },
          { property: 'og:image:height', content: '200' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:title', content: 'Mahaaya Privacy Policy' },
          { property: 'og:type', content: 'Website' },
          { property: 'og:description', content: 'Your privacy matters. Explore Mahaaya`s commitment to safeguarding your information in our clear and concise Privacy Policy.' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:image:url', content: "https://mahaaya.com//assets/og-img/services.jpg" },
          { property: 'og:site_name', content: 'Mahaaya' },
          { property: 'og:url', content: 'https://www.mahaaya.com/privacypolicy' }
        ]
      }
    }
  },
  {
    path: 'contact-us', component: ContactUsComponent,
    data: {
      seo: {
        title: 'Get in Touch: Contact Mahaaya',
        metaTags: [
          { name: 'description', content: 'Connect with ease. Contact Mahaaya for inquiries, collaboration, or just any possible question. We`re here to listen and engage with you!' },
          { name: 'keywords', content: 'Inquiry, connect with us, contact form, contact Mahaaya, contact information' },
          { name: 'MobileOptimized', content: 'width' },
          { name: 'HandheldFriendly', content: 'true' },
          { property: 'og:image', content: "https://mahaaya.com//assets/og-img/contactimage.jpg" },
          { property: 'og:image:width', content: '200' },
          { property: 'og:image:height', content: '200' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:title', content: 'Get in Touch: Contact Mahaaya' },
          { property: 'og:type', content: 'Website' },
          { property: 'og:description', content: 'Connect with ease. Contact Mahaaya for inquiries, collaboration, or just any possible question. We`re here to listen and engage with you!' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:image:url', content: "https://mahaaya.com//assets/og-img/contactimage.jpg" },
          { property: 'og:site_name', content: 'Mahaaya' },
          { property: 'og:url', content: 'https://www.mahaaya.com/contact-us' }
        ]
      }
    }
  },
  {
    path: 'ourlocation', component: OurlocationComponent,
    data: {
      seo: {
        title: 'Global Presence: Our Locations',
        metaTags: [
          { name: 'description', content: 'Explore our global footprint. From vibrant city hubs to strategic locations, discover where Mahaaya thrives and connects with the world.' },
          { name: 'keywords', content: 'Company locations, Offices, Global connectivity, worldwide reach, business locaitons' },
          { name: 'MobileOptimized', content: 'width' },
          { name: 'HandheldFriendly', content: 'true' },
          { property: 'og:image', content: "https://mahaaya.com//assets/og-img/ourlocationbanner.jpg" },
          { property: 'og:image:width', content: '200' },
          { property: 'og:image:height', content: '200' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:title', content: 'Global Presence: Our Locations' },
          { property: 'og:type', content: 'Website' },
          { property: 'og:description', content: 'Explore our global footprint. From vibrant city hubs to strategic locations, discover where Mahaaya thrives and connects with the world.' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:image:url', content: "https://mahaaya.com//assets/og-img/ourlocationbanner.jpg" },
          { property: 'og:site_name', content: 'Mahaaya' },
          { property: 'og:url', content: 'https://www.mahaaya.com/ourlocation' }
        ]
      }
    }
  },
  {
    path: 'about-us/:id', component: AboutComponent,
    data: {
      seo: {
        title: 'Leaders of Mahaaya',
        metaTags: [
          { name: 'description', content: 'Meet the visionaries leading Mahaaya to success. Our Leaders page introduces the driving force behind our innovation and commitment to excellence.' },
          { name: 'keywords', content: 'Meet our executives, Success Drivers, Visionaries, Leaders' },
          { name: 'MobileOptimized', content: 'width' },
          { name: 'HandheldFriendly', content: 'true' },
          { property: 'og:image', content: "https://mahaaya.com//assets/og-img/Siva-Periasamy.jpg" },
          { property: 'og:image:width', content: '200' },
          { property: 'og:image:height', content: '200' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:title', content: 'Leaders of Mahaaya' },
          { property: 'og:type', content: 'Website' },
          { property: 'og:description', content: 'Meet the visionaries leading Mahaaya to success. Our Leaders page introduces the driving force behind our innovation and commitment to excellence.' },
          { property: 'og:image:type', content: 'image/jpg' },
          { property: 'og:image:url', content: "https://mahaaya.com//assets/og-img/Siva-Periasamy.jpg" },
          { property: 'og:site_name', content: 'Mahaaya' },
          { property: 'og:url', content: 'https://www.mahaaya.com/about-us#team' }
        ]
      }
    }
  },
  { path: 'services', loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule) },
  { path: 'solutionmarketplace', loadChildren: () => import('./modules/solutionmarketplace/solutionmarketplace.module').then(m => m.SolutionmarketplaceModule) },
  { path: 'resources', loadChildren: () => import('./modules/resources/resources.module').then(m => m.ResourcesModule) },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
