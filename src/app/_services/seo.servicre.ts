import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { Meta, MetaDefinition, Title } from "@angular/platform-browser";


@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private _title: Title, private meta: Meta, @Inject(DOCUMENT) private _doc: Document) {

  }
  updateTitle(title: string) {
    this._title.setTitle(title);
  }

  updateMetaTags(metaTags: MetaDefinition[]) {
    metaTags.forEach(m => this.meta.updateTag(m));
  }

  setMetaTags(metaTags: MetaDefinition[]) {
    metaTags.forEach(m => this.meta.addTag(m));
  }
}
