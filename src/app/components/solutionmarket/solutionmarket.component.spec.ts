import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionmarketComponent } from './solutionmarket.component';

describe('SolutionmarketComponent', () => {
  let component: SolutionmarketComponent;
  let fixture: ComponentFixture<SolutionmarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionmarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionmarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
