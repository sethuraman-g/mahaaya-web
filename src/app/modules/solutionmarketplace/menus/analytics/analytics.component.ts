import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { URLS } from 'src/app/_config/api.config';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {
    private image1Url = '/assets/image/img/global-img/Analytics Modernisation POV (2).pdf'; 
    submitted = false;
    downloadForm!: FormGroup;
    private ngUnsubscribe$ = new Subject();
    unSubscribe$ = new Subject();
    
    // contactService: any;
    constructor(private fb: FormBuilder, private router: Router, private apiservice: ApiService,  @Inject(DOCUMENT) private _doc: Document,
    ) {
      this.downloadForm = this.fb.group({
        first_name: ['', [Validators.required]],
        company_name: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/),],],
        comments: ['', [Validators.required, Validators.maxLength(500)]],
        last_name: '',
        phone_number: '',
        state: '',
      });
    }
  
    ngOnInit() {
 
    }
    // skipAndDownload() {
    //   const excelFileUrl = '/assets/image/img/Mahaaya Proof of Value Overview.pptx';
    //   window.location.href = excelFileUrl;
    // }
    get f() {
      return this.downloadForm.controls;
    }
   
      
      onSubmit(form:NgForm) {
        this.submitted = true;
        if (this.downloadForm.valid) {
          this.apiservice.post(URLS.contact, this.downloadForm.value)
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe((res: any) => {
              if (res && res.status==true) {
                this.downloadImages();
                (<any>$('#staticBackdrop')).modal('hide');
              }
            });
            this.clearForm();
          }
      }
  
      mo(){
        (<any>$('#staticBackdrop')).modal('hide');
      }
  
      downloadImages() {
        // Download the first image
        const link1 = this._doc.createElement('a');
        link1.href = this.image1Url;
        link1.download = 'Analytics Modernisation POV (2).pdf';
        link1.style.display = 'none';
        this._doc.body.appendChild(link1);
        link1.click();
        this._doc.body.removeChild(link1);
      }
  
    clearForm() {
      this.downloadForm.clearValidators();
      this.downloadForm.updateValueAndValidity();
      this.downloadForm.reset();
      this.submitted = false;
    }
    scrollToSection(sectionId: string): void {
      const section = this._doc.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
}



