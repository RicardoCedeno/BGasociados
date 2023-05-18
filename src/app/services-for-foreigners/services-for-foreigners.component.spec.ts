import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesForForeignersComponent } from './services-for-foreigners.component';

describe('ServicesForForeignersComponent', () => {
  let component: ServicesForForeignersComponent;
  let fixture: ComponentFixture<ServicesForForeignersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesForForeignersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesForForeignersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
