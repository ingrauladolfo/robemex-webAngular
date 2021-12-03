import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurBrandsHomeComponent } from './our-brands-home.component';

describe('OurBrandsHomeComponent', () => {
  let component: OurBrandsHomeComponent;
  let fixture: ComponentFixture<OurBrandsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurBrandsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBrandsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
