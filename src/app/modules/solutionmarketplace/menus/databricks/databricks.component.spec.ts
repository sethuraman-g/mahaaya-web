import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabricksComponent } from './databricks.component';

describe('DatabricksComponent', () => {
  let component: DatabricksComponent;
  let fixture: ComponentFixture<DatabricksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabricksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
