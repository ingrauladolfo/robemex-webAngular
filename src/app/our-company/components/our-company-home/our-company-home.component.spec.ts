import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCompanyHomeComponent } from './our-company-home.component';

describe('OurCompanyHomeComponent', () => {
  let component: OurCompanyHomeComponent;
  let fixture: ComponentFixture<OurCompanyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurCompanyHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCompanyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
