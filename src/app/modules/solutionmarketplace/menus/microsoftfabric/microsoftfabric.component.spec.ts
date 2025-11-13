import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftfabricComponent } from './microsoftfabric.component';

describe('MicrosoftfabricComponent', () => {
  let component: MicrosoftfabricComponent;
  let fixture: ComponentFixture<MicrosoftfabricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrosoftfabricComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicrosoftfabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
