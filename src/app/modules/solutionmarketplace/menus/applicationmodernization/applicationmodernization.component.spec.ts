import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationmodernizationComponent } from './applicationmodernization.component';

describe('ApplicationmodernizationComponent', () => {
  let component: ApplicationmodernizationComponent;
  let fixture: ComponentFixture<ApplicationmodernizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationmodernizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationmodernizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
