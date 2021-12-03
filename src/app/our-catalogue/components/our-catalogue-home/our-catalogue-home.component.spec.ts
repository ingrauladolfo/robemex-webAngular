import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCatalogueHomeComponent } from './our-catalogue-home.component';

describe('OurCatalogueHomeComponent', () => {
  let component: OurCatalogueHomeComponent;
  let fixture: ComponentFixture<OurCatalogueHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurCatalogueHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurCatalogueHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
