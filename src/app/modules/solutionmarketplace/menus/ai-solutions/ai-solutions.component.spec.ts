import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiSolutionsComponent } from './ai-solutions.component';

describe('AiSolutionsComponent', () => {
  let component: AiSolutionsComponent;
  let fixture: ComponentFixture<AiSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
