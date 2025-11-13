import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog2ContentComponent } from './blog2-content.component';

describe('Blog2ContentComponent', () => {
  let component: Blog2ContentComponent;
  let fixture: ComponentFixture<Blog2ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Blog2ContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blog2ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
