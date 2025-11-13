import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { URLS } from 'src/app/_config/api.config';
import { ApiService } from 'src/app/_services/api.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  submitted = false;
  subscribeForm!: FormGroup;
  private ngUnsubscribe$ = new Subject();
  unSubscribe$ = new Subject();
  // contactService: any;
  constructor(private fb: FormBuilder, private router: Router, private apiservice: ApiService,
    @Inject(DOCUMENT) private _doc: Document,) {
    this.subscribeForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      state: ['', [Validators.required]],
      company_name: ['', [Validators.required]],
      phone_number: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/),],],
      comments: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  ngOnInit() {

  }


  get f() {
    return this.subscribeForm.controls;
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    this.subscribeForm.value
    if (this.subscribeForm.invalid) {
      return
    }
    this.apiservice.post(URLS.contact, this.subscribeForm.value).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res) {
        this.subscribeForm.reset();
        this.submitted = false;
      }
    })
  }

  clearForm() {
    this.subscribeForm.clearValidators();
    this.subscribeForm.updateValueAndValidity();
    this.subscribeForm.reset();
    this.submitted = false;
  }
  scrollToSection(sectionId: string): void {
    const section = this._doc.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
