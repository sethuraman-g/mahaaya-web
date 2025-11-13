import { APP_ID, Inject, NgModule, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CareerComponent } from './components/career/career.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { isPlatformBrowser } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeadershipteamComponent } from './components/leadershipteam/leadershipteam.component';
import { SolutionmarketComponent } from './components/solutionmarket/solutionmarket.component';
import { PrivacypolicyComponent } from './components/privacypolicy/privacypolicy.component';
import { OurlocationComponent } from './components/ourlocation/ourlocation.component';
import { EventsComponent } from './components/events/events.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogContentComponent } from './components/blog-content/blog-content.component';
import { Blog2ContentComponent } from './components/blog2-content/blog2-content.component';
import { Blog3ContentComponent } from './components/blog3-content/blog3-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CareerComponent,
    ContactUsComponent,
    CustomerComponent,
    LeadershipteamComponent,
    SolutionmarketComponent,
    PrivacypolicyComponent,
    OurlocationComponent,
    EventsComponent,
    BlogsComponent,
    BlogContentComponent,
    Blog2ContentComponent,
    Blog3ContentComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'Mahaaya' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? 'in the browser'
      : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
