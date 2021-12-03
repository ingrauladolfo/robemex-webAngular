import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCataloguePdfComponent } from './our-catalogue-pdf.component';

describe('OurCataloguePdfComponent', () => {
  let component: OurCataloguePdfComponent;
  let fixture: ComponentFixture<OurCataloguePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurCataloguePdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCataloguePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
