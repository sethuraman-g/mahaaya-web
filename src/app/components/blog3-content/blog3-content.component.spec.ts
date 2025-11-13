import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blog3ContentComponent } from './blog3-content.component';

describe('Blog3ContentComponent', () => {
  let component: Blog3ContentComponent;
  let fixture: ComponentFixture<Blog3ContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Blog3ContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blog3ContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
