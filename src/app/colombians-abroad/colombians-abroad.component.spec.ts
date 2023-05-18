import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColombiansAbroadComponent } from './colombians-abroad.component';

describe('ColombiansAbroadComponent', () => {
  let component: ColombiansAbroadComponent;
  let fixture: ComponentFixture<ColombiansAbroadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColombiansAbroadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColombiansAbroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
