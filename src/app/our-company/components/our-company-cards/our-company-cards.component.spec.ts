import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCompanyCardsComponent } from './our-company-cards.component';

describe('OurCompanyCardsComponent', () => {
  let component: OurCompanyCardsComponent;
  let fixture: ComponentFixture<OurCompanyCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurCompanyCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCompanyCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
