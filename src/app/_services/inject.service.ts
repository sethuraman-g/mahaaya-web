import { DOCUMENT } from "@angular/common";
import { Inject,Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class InjectService {

  constructor(@Inject(DOCUMENT) private _doc: Document) { }

  getWindow(): Window | null {
    return this._doc.defaultView;
  }

  getLocation(): Location {
    return this._doc.location;
  }

  getWidth(): number {
    return window.innerWidth;
  }
}
