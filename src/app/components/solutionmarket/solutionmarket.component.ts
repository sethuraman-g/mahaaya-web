import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutionmarket',
  templateUrl: './solutionmarket.component.html',
  styleUrls: ['./solutionmarket.component.scss']
})
export class SolutionmarketComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _doc: Document,) {

   }

  ngOnInit(): void {
  }
scrollToBottom2(id:string) {
  const element=  this._doc.getElementById('mkio')
    if(element){
element.scrollIntoView()
    }
  }
}
