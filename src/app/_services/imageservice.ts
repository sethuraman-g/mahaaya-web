import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private imageURLSubject = new BehaviorSubject<string>(''); 
  imageURL$ = this.imageURLSubject.asObservable();

  setImageURL(imageURL: string) {
    this.imageURLSubject.next(imageURL);
  }
}