import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurFirmComponent } from './our-firm.component';

describe('OurFirmComponent', () => {
  let component: OurFirmComponent;
  let fixture: ComponentFixture<OurFirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurFirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurFirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
