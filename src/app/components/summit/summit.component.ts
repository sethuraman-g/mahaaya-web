import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { URLS } from 'src/app/_config/api.config';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-summit',
  templateUrl: './summit.component.html',
  styleUrls: ['./summit.component.scss']
})
export class SummitComponent implements OnDestroy {
  submitted = false;
  invitationForm!: FormGroup;
  private unSubscribe$ = new Subject();

  speakers = [
    {
      name: 'Mukash Krishnan',
      description: 'A successful entrepreneur with a visionary approach to new business models and digital strategies.',
      image: '/assets/image/img/about/AI-event-speaker.png'
    },
    {
      name: 'Mukash Krishnan',
      description: 'A successful entrepreneur with a visionary approach to new business models and digital strategies.',
      image: '/assets/image/img/about/AI-event-speaker.png'
    },
    {
      name: 'Mukash Krishnan',
      description: 'A successful entrepreneur with a visionary approach to new business models and digital strategies.',
      image: '/assets/image/img/about/AI-event-speaker.png'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private apiservice: ApiService
  ) {
    this.invitationForm = this.fb.group({
      full_name: ['', [Validators.required]],
      job_title: ['', [Validators.required]],
      company_name: ['', [Validators.required]],
      company_email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)]],
    });
  }

  get f() {
    return this.invitationForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.invitationForm.invalid) {
      return;
    }

    const formValue = this.invitationForm.value;

    // Map Summit form fields to the contact-us API payload structure
    const payload = {
      first_name: formValue.full_name,
      last_name: formValue.full_name, // backend expects a value; reuse full name
      state: 'N/A',
      company_name: formValue.company_name,
      phone_number: '0000000000', // satisfy numeric + required pattern
      email: formValue.company_email,
      comments: `Summit invitation request - Job Title: ${formValue.job_title}`
    };

    this.apiservice.post(URLS.contact, payload).pipe(takeUntil(this.unSubscribe$)).subscribe((res: any) => {
      if (res) {
        this.invitationForm.reset();
        this.submitted = false;
        alert('Thank you! Your invitation request has been submitted successfully.');
      }
    }, (error: any) => {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again.');
    });
  }

  ngOnDestroy() {
    this.unSubscribe$.next(null);
    this.unSubscribe$.complete();
  }
}

