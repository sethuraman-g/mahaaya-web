import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { SeoService } from './_services/seo.servicre';
import { InjectService } from './_services/inject.service';
import { DOCUMENT } from '@angular/common';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mahaaya';
  constructor(@Inject(DOCUMENT) private _doc: Document,
    private domService: InjectService,
    private seoService: SeoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,) {
  }
  ngOnInit(): void {
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd), map((e) => this.activatedRoute),map((route) => { while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((data) => {
        if (data !== undefined) {
          let seoData = data['seo'];
          this.seoService.updateTitle(seoData['title']);
          this.seoService.updateMetaTags(seoData['metaTags']);
        }
      });
    AOS.init();
  }
  route(id: string) {
    this._doc
      .getElementById(id)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }
}
