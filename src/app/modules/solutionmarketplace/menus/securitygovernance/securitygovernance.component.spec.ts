import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuritygovernanceComponent } from './securitygovernance.component';

describe('SecuritygovernanceComponent', () => {
  let component: SecuritygovernanceComponent;
  let fixture: ComponentFixture<SecuritygovernanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuritygovernanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecuritygovernanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
