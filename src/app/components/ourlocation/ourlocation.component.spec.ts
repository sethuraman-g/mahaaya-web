import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurlocationComponent } from './ourlocation.component';

describe('OurlocationComponent', () => {
  let component: OurlocationComponent;
  let fixture: ComponentFixture<OurlocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurlocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
